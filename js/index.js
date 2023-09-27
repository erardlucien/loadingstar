'use strict';

let stars = document.querySelectorAll('.star');
const STARNUMBER = stars.length;
let index = 0;
let timeout;

function active() {

    if(index === STARNUMBER) {
        index = 0;
        clearTimeout(timeout);
    } else {
        stars[index].classList.add('star-active');
    }

    ++index;
    timeout = setTimeout(active, 1800);
}

setTimeout(active, 1000);