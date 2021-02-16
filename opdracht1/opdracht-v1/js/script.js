/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//globale declaraties
//var array = ["img.heart", "img.heart", "img.heart", "img.heart", "img.heart", "img.heart", "img.heart", "img.heart", "img.heart", "img.heart", "img.heart"];

var favorietenHartje1 = document.querySelector('#heart1');
var favorietenHartje2 = document.querySelector('#heart2');
var favorietenHartje3 = document.querySelector('#heart3');
var favorietenHartje4 = document.querySelector('#heart4');
var favorietenHartje5 = document.querySelector('#heart5');


//eventHandlers

function favorietSelecteren1() {
    favorietenHartje1.src = 'img/HeartFull.png';
}

function favorietSelecteren2() {
    favorietenHartje2.src = 'img/HeartFull.png';
}

function favorietSelecteren3() {
    favorietenHartje3.src = 'img/HeartFull.png';
}

function favorietSelecteren4() {
    favorietenHartje4.src = 'img/HeartFull.png';
}

function favorietSelecteren5() {
    favorietenHartje5.src = 'img/HeartFull.png';
}

function favorietDeselecteren1() {
    favorietenHartje1.src = 'img/HeartEmpty.png';
}

function favorietDeselecteren2() {
    favorietenHartje2.src = 'img/HeartEmpty.png';
}

function favorietDeselecteren3() {
    favorietenHartje3.src = 'img/HeartEmpty.png';
}

function favorietDeselecteren4() {
    favorietenHartje4.src = 'img/HeartEmpty.png';
}

function favorietDeselecteren5() {
    favorietenHartje5.src = 'img/HeartEmpty.png';
}

//array.forEach(favorietSelecteren);


//eventListeners

favorietenHartje1.addEventListener('click', favorietSelecteren1);
favorietenHartje2.addEventListener('click', favorietSelecteren2);
favorietenHartje3.addEventListener('click', favorietSelecteren3);
favorietenHartje4.addEventListener('click', favorietSelecteren4);
favorietenHartje5.addEventListener('click', favorietSelecteren5);


favorietenHartje1.addEventListener('dblclick', favorietDeselecteren1);
favorietenHartje2.addEventListener('dblclick', favorietDeselecteren2);
favorietenHartje3.addEventListener('dblclick', favorietDeselecteren3);
favorietenHartje4.addEventListener('dblclick', favorietDeselecteren4);
favorietenHartje5.addEventListener('dblclick', favorietDeselecteren5);
