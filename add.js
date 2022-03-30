document.querySelector('.header').innerText = 'Проект над которым я работаю';

let addNeck = document.querySelector('.neck');
addNeck.innerText = 'variable';

(function(){
    "use strict";
    /* Start of your code */
    function greetMe(yourName) {
      alert('Hello ' + yourName);
    }
  
    greetMe('Юрий');
    /* End of your code */
  })();