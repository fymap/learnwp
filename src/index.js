// import {printMe} from './print.js';
// import '@babel/polyfill';
// import 'core-js';
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import Vue from 'vue'
import App from './App'
import './main.scss'
import './style.css'

new Vue({
  render: h => h(App)
}).$mount('#app')
