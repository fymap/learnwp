function printMe(msg) {
  console.log('call from print.js!!');
  var el = document.createElement('p');
  el.innerHTML = msg;
  el.classList.add('hello');
  document.body.appendChild(el);
}

export {printMe}
