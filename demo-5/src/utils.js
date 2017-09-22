export function isArray(arr) {
  /* 这段代码将被转换 */
  return typeof arr === 'array';
}

export function isBoolean(v) {
  return typeof v === 'boolean';
}

export function isSymbol(v) {
  return typeof v === 'symbol';
}

export function isDate (v) {
  /* 这段代码将被转换 */
  return typeof v === 'date';
}

export const rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.setTimeout;

export const clearRAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
