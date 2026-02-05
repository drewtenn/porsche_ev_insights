# Multi-stage Dockerfile for Porsche EV Insights
# Stage 1: Build the React frontend
FROM node:20-alpine AS frontend-build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Install server dependencies
FROM node:20-alpine AS server-build

WORKDIR /app/server

# Copy server package files
COPY server/package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Stage 3: Production image with nginx and Node.js
FROM node:20-alpine

# Install nginx and supervisor
RUN apk add --no-cache nginx supervisor

# Create necessary directories
RUN mkdir -p /var/log/supervisor /run/nginx

# Copy built frontend to nginx html directory
COPY --from=frontend-build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy server code and dependencies
WORKDIR /app/server
COPY --from=server-build /app/server/node_modules ./node_modules
COPY server/index.js ./
COPY server/package.json ./

# Create supervisor configuration
RUN cat > /etc/supervisord.conf <<EOF
[supervisord]
nodaemon=true
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid
user=root

[program:nginx]
command=nginx -g "daemon off;"
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0

[program:nodejs]
command=node /app/server/index.js
directory=/app/server
autostart=true
autorestart=true
environment=NODE_ENV="production",PORT="3001"
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
EOF

# Expose port 80 for nginx
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/api/health || exit 1

# Start supervisor to manage both nginx and Node.js
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
