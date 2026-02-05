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

# Stage 3: Production image with Node.js and static frontend
FROM node:20-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Create app directories
WORKDIR /app

# Copy built frontend static files
COPY --from=frontend-build /app/dist ./public

# Copy server code and dependencies
WORKDIR /app/server
COPY --from=server-build /app/server/node_modules ./node_modules
COPY server/index.js ./
COPY server/package.json ./

# Expose port 3001 for Node.js
EXPOSE 3001

# Run Node.js server
CMD ["node", "/app/server/index.js"]
