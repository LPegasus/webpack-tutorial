const babel = require('babel-core');
const plugin1 = require('./typeof-plugin');
const plugin2 = require('./show-plugins-execute-order');

const code = `
function isObject(a) { return typeof a === "object"; }
function isArray(a) { return typeof a === "array"; }
function isDate(a) { return typeof a === "date"; }
`;

console.log('original code is:');
console.log(code);
console.log('transforming ================================> to')

const r = babel.transform(code, {
  plugins: [
    plugin1, plugin2
  ]
}).code;

console.log(r);
