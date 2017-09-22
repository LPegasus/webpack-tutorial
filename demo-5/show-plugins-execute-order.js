module.exports = function() {
  return {
    visitor: {
      Program: {
        enter() {
          console.log('execute-order program enter');
        },
        exit() {
          console.log('execute-order program leave');
        }
      },
      BinaryExpression() {
        console.log('execute-order BinaryExpression run');
      }
    }
  }
}
