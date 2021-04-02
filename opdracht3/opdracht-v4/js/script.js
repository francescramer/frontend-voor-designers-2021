var json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector("section");
var movieName = document.querySelector("#title");
var movieCover = document.querySelector("#cover");
var movieText = document.querySelector("#text");

//var release = document.querySelector("#plot");

var request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();



var knopTerug = document.querySelector('#terug');
var knopVerder = document.querySelector('#verder');

var huidigeFilm = document.querySelector("main");

var huidigeFilm = 0;
var eersteFilm = json.length - 6;
var laatsteFilm = json.length - 1;


function updateData() {
    
    title.textContent = request.response[huidigeFilm].title;
    image.src = request.response[huidigeFilm].cover;
    release_date.textContent = request.response[huidigeFilm].release_date;
    plot.textContent = request.response[huidigeFilm].plot;
}


function volgendeFilm(arr) {
    huidigeFilm = huidigeFilm + 1;
    if (huidigeFilm > laatsteFilm) {
        huidigeFilm = eersteFilm;
    }
    updateData();
}

function vorigeFilm(arr) {
    huidigeFilm = huidigeFilm - 1;
    if (huidigeFilm < eersteFilm) {
        huidigeFilm = laatsteFilm;
    }
    updateData();
}




request.addEventListener("load", function () {
    console.log("data is geladen")
    console.log(request.response);
    console.log(request.response[huidigeFilm].title);

    var title = document.createElement("h2");
    title.textContent = request.response[huidigeFilm].title;
    movieName.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[huidigeFilm].cover;
    movieCover.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[huidigeFilm].release_date;
    movieText.appendChild(release_date);
    
    var genres = document.createElement("p");
    genres.textContent = request.response[huidigeFilm].genres;
    movieText.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[huidigeFilm].plot;
    movieText.appendChild(plot);
})





knopTerug.addEventListener('click', volgendeFilm);
knopVerder.addEventListener('click', vorigeFilm);
