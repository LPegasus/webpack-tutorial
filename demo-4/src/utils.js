const toString = Object.prototype.toString;
export function isArray(arr) {
  return toString.call(arr) === '[object Array]';
}

export function isBoolean(v) {
  return typeof v === 'boolean';
}

export function isSymbol(v) {
  return typeof v === 'symbol';
}

export function isPromise(v) {
  return toString.call(v) === '[object Promise]';
}

export const rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.setTimeout;

export const clearRAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
