import _ from 'underscore';

var render = _.template(`<h1><%= content%></h1>`);

function component() {
  var element = document.createElement('div');
  element.innerHTML = render({content: 'Hello webpack 1'});

  return element;
}

document.body.appendChild(component());
