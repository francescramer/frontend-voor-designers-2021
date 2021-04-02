var json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector("section");
var release = document.querySelector("#plot");

var request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();



//var knopTerug = document.querySelector('#terug');
//var knopVerder = document.querySelector('#verder');
//
//var huidigeFilm = document.querySelector("main");
//
//var huidigeFilm = 0;
//var eersteFilm = json.length - 6;
//var laatsteFilm = json.length - 1;
//
//
//function updateData() {
//    
//    title.textContent = request.response[huidigeFilm].title;
//    image.src = request.response[huidigeFilm].cover;
//    release_date.textContent = request.response[huidigeFilm].release_date;
//    plot.textContent = request.response[huidigeFilm].plot;
//}
//
//
//function volgendeFilm(arr) {
//    huidigeFilm = huidigeFilm + 1;
//    if (huidigeFilm > laatsteFilm) {
//        huidigeFilm = eersteFilm;
//    }
//    updateData();
//}
//
//function vorigeFilm(arr) {
//    huidigeFilm = huidigeFilm - 1;
//    if (huidigeFilm < eersteFilm) {
//        huidigeFilm = laatsteFilm;
//    }
//    updateData();
//}




request.addEventListener("load", function () {
    console.log("data is geladen")
    console.log(request.response);
    console.log(request.response[0].title);

    var title = document.createElement("h2");
    title.textContent = request.response[0].title;
    section.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[0].cover;
    section.appendChild(image);

    var release_date = document.createElement("h3");
    release_date.textContent = request.response[0].release_date;
    section.appendChild(release_date);

    var plot = document.createElement("p");
    plot.textContent = request.response[0].plot;
    section.appendChild(plot);
})





//knopTerug.addEventListener('click', volgendeFilm);
//knopVerder.addEventListener('click', vorigeFilm);
