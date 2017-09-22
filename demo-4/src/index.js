import './index.css';
import * as utils from './utils';
// import { performanceLog } from './libcjs';
// const utils = require('./utils');
import doge from './doge.jpg';
import tt from './tt.gif';

function component() {
  var element = document.createElement('div');
  element.innerHTML = '<h1>Hello webpack - 4 TreeShaking</h1>';

  var image1 = new Image();
  image1.src = tt.url;
  
  var image2 = new Image();
  image2.src = doge.url;
  
  element.appendChild(image1);
  element.appendChild(image2);

  return element;
}

~function() {
  utils.rAF(document.body.appendChild(component()));
}();
