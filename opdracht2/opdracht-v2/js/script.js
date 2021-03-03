/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// arrays: ]
var fotos = ['limburg01.jpg', 'limburg02.jpg', 'limburg03.jpg', 'limburg04.jpg', 'limburg05.jpg', 'limburg06.jpg'];
var bals = ['selected01.png', 'selected02.png', 'selected03.png', 'selected04.png', 'selected05.png', 'selected06.png'];

var vakantieImg = document.querySelector('#vakantie');
var balsImg = document.querySelector('#dots');

var knopTerug = document.querySelector('#terug');
var knopVerder = document.querySelector('#verder');

var afbeelding = 0;
vakantieImg.src = 'img/' + fotos[afbeelding];
balsImg.src = 'img/' + bals[afbeelding];

var eersteAfb = fotos.length - 6;
var laatsteAfb = fotos.length - 1;

function updateFoto() {
    vakantieImg.src = 'img/' + fotos[afbeelding];
    balsImg.src = 'img/' + bals[afbeelding];
}

function afbeeldingVerder() {
    afbeelding = afbeelding + 1;

    if (afbeelding > laatsteAfb) {
        afbeelding = eersteAfb;
    }
    updateFoto();
}

function afbeeldingTerug() {
    afbeelding = afbeelding - 1;

    if (afbeelding < eersteAfb) {
        afbeelding = laatsteAfb;
    }
    updateFoto();
}

knopTerug.addEventListener('click', afbeeldingTerug);

knopVerder.addEventListener('click', afbeeldingVerder);
