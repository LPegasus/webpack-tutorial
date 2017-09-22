import './index.css';
import _ from 'underscore';
import doge from './doge.jpg';
import tt from './tt.gif';

var render = _.template(`<h1><%= content%></h1>`);

function component() {
  var element = document.createElement('div');
  element.innerHTML = render({content: 'Hello webpack 3'});

  var image1 = new Image();
  image1.src = tt.url;
  image1.alt = tt.name;
  
  var image2 = new Image();
  image2.alt = doge.name;
  image2.src = doge.url;
  
  element.appendChild(image1);
  element.appendChild(image2);
  return element;
}

document.body.appendChild(component());
