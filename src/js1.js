import './sec1.css';
import './sec11.less';

var jquery = require('jquery');

console.log(jquery);

//var sec = require('./sec1.html');
var sec = require('./file.pug');

document.body.innerHTML = sec;

class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
}

var ci = new Shape('apple',3,4);
console.log(ci);
