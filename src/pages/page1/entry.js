import './top.js';
import './top.less';

var dom = require('./top.pug');
document.body.innerHTML = dom;

var img = require('images/yellow.jpg');

console.log(img);
