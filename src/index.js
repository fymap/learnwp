// import {printMe} from './print.js';
import './main.scss';
import './style.css';

// printMe('SASS and Stylus are mostly programmatic in nature and permit advanced logic and algorithms. They allow us to write custom functions.');
// printMe('All three CSS pre-processors considered in this article are mostly capable of the same things at their core and really just go about implementation and syntax differently. They have their areas of excellence and those of weakness. The choice of which to use is mostly situational and dependent on the requirements of the project in question.');

var elem = document.createElement('div');
var btn = document.createElement('button');
var br = document.createElement('br');
btn.innerHTML = 'Click Me';
elem.appendChild(br);
elem.appendChild(btn);

document.body.appendChild(elem);

btn.onclick = function (e) {
  import(/* webpackChunkName: "print" */'./print.js').then(module => {
    var printMe = module.printMe;
    printMe('hello111');
  })
}