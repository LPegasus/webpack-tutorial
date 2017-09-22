const babel = require('babel-core');
const t = require('babel-types');

module.exports = function() {
  return {
    visitor: {
      Program: {
        enter() {
          console.log('typeof program enter');
        },
        exit() {
          console.log('typeof program leave');
        }
      },
      BinaryExpression: function(path) {
        console.log('typeof BinaryExpression run');
        let l;  // 左侧为 typeof 表达式
        let r;  // 右侧为 typeof 表达式
        let type; // 记录表达判断的类型
        let paramNode;
        if (path.node.left.operator === 'typeof'
          && (l = t.isUnaryExpression(path.node.left))
          || (r = t.isUnaryExpression(path.node.right))
          && path.node.right.operator === 'typeof'
        ) {
          if (l && t.isStringLiteral(path.node.right)) {  // 等号左侧是表达式
            type = path.node.right.value;
            paramNode = path.node.left.argument;
          } else if (r && t.isStringLiteral(path.node.left)) {
            type = path.node.left.value;
            paramNode = path.node.right.argument;
          }
          if (!type) return;
          let res;
          switch (type) {
            case 'string': {
              res = 'string';
              break;
            }
            case 'String': {
              res = '[object String]';
              break;
            }
            case 'number': {
              res = 'number';
              break;
            }
            case 'Number': {
              res = '[object Number]';
              break;
            }
            case 'object': {
              res = '[object Object]';
              break;
            }
            case 'date': {
              res = '[object Date]';
              break;
            }
            case 'array': {
              res = '[object Array]';
              break;
            }
            default:
              break;
          }
          if (res) {
            const newNode = t.binaryExpression('===', t.callExpression(
              t.memberExpression(
                t.memberExpression(
                  t.identifier('Object'), t.identifier('prototype')), t.identifier('toString')
              ), [paramNode]
            ), t.stringLiteral(res)
            );
            path.replaceWith(newNode);
          }
        }
      }
    }
  }
}
