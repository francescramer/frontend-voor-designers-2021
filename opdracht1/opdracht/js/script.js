/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Copyleft 2016-2019 */

//globale declaraties
var favorietenHartje = document.querySelector('.heart');

//eventHandlers
function favorietSelecteren () {
    favorietenHartje.src = 'img/HeartFull.png';
}

function favorietDeselecteren () {
    favorietenHartje.src = 'img/HeartEmpty.png';
}

//eventListeners:
favorietenHartje.addEventListener('click', favorietSelecteren)
favorietenHartje.addEventListener('dblclick', favorietDeselecteren);