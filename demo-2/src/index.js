import './index.css';
import _ from 'underscore';
import doge from './doge.jpg';

var render = _.template(`<h1><%= content%></h1>`);

function component() {
  var element = document.createElement('div');
  element.innerHTML = render({content: 'Hello webpack 2'});

  var myIcon = new Image();
  myIcon.src = doge;
  element.appendChild(myIcon);

  return element;
}


document.body.appendChild(component());
