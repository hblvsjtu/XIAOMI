/* ***************************************************************
 *
 * * Filename: test.js
 *
 * * Description:test for webpack and sass-loader
 *
 * * Version: 1.0.0
 *
 * * Created: 2018/06/05
 *
 * * Revision: none
 *
 * * Compiler: node
 *
 * * Author: Lv Hongbin
 *
 * * Company: Shanghai JiaoTong Univerity
 *
/* **************************************************************/

import '../sass/test.scss';


 function component() {
   var element = document.createElement('div');
   element.innerHTML = 'Hello webpack!';
   element.classList.add('two');
   
   return element;
 }

 document.body.appendChild(component());

