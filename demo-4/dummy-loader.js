const loaderUtils = require('loader-utils');
module.exports = function(source, map) {
  console.log(loaderUtils.getCurrentRequest(this));
  console.log(111111);
  return source;
}
