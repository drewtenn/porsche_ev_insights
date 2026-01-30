// ========== PRECISION HELPERS (replaces decimal.js) ==========
export const precise = {
  add: (a, b) => Math.round((a + b) * 1000000) / 1000000,
  sub: (a, b) => Math.round((a - b) * 1000000) / 1000000,
  mul: (a, b) => Math.round((a * b) * 1000000) / 1000000,
  div: (a, b) => b !== 0 ? Math.round((a / b) * 1000000) / 1000000 : 0,
  round: (n, dp = 2) => Math.round(n * Math.pow(10, dp)) / Math.pow(10, dp)
};
