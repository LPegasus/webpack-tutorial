const isPromise = require('./utils').isPromise;
/*
function isPromise(v) {
  return toString.call(v) === '[object Promise]';
}
*/
exports.performanceLog = function performance(fn) {
  if (window.performance) {
    const performance = window.performance;
    return function() {
      const t1 = performance.now();
      function logTime() {
        console.log(performance.now() - t1);
      }
      const rtn = fn.apply(this,
        Array.prototype.slice.call(arguments).concat(logTime));
      if (isPromise(rtn)) {
        rtn.then(logTime);
      } else {
        logTime();
      }
      return rtn;
    }
  }
}

exports.noop = function() { return void 0; }
