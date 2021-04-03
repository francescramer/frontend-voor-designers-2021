var json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section1 = document.querySelector("#movie1");
var movieName1 = document.querySelector("#title1");
var movieCover1 = document.querySelector("#cover1");
var movieText1 = document.querySelector("#text1");

var section2 = document.querySelector("#movie2");
var movieName2 = document.querySelector("#title2");
var movieCover2 = document.querySelector("#cover2");
var movieText2 = document.querySelector("#text2");

var section3 = document.querySelector("#movie3");
var movieName3 = document.querySelector("#title3");
var movieCover3 = document.querySelector("#cover3");
var movieText3 = document.querySelector("#text3");

var section4 = document.querySelector("#movie4");
var movieName4 = document.querySelector("#title4");
var movieCover4 = document.querySelector("#cover4");
var movieText4 = document.querySelector("#text4");

var section5 = document.querySelector("#movie5");
var movieName5 = document.querySelector("#title5");
var movieCover5 = document.querySelector("#cover5");
var movieText5 = document.querySelector("#text5");

var section6 = document.querySelector("#movie6");
var movieName6 = document.querySelector("#title6");
var movieCover6 = document.querySelector("#cover6");
var movieText6 = document.querySelector("#text6");

var request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();

request.addEventListener("load", function () {
    //    console.log("data is geladen")
    //    console.log(request.response);
    //    console.log(request.response[0].title);

    var title = document.createElement("h2");
    title.textContent = request.response[0].title;
    movieName1.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[0].cover;
    movieCover1.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[0].release_date;
    movieText1.appendChild(release_date);

    var genres = document.createElement("p");
    genres.textContent = request.response[0].genres;
    movieText1.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[0].plot;
    movieText1.appendChild(plot);



    var title = document.createElement("h2");
    title.textContent = request.response[1].title;
    movieName2.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[1].cover;
    movieCover2.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[1].release_date;
    movieText2.appendChild(release_date);

    var genres = document.createElement("p");
    genres.textContent = request.response[1].genres;
    movieText2.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[1].plot;
    movieText2.appendChild(plot);



    var title = document.createElement("h2");
    title.textContent = request.response[2].title;
    movieName3.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[2].cover;
    movieCover3.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[2].release_date;
    movieText3.appendChild(release_date);

    var genres = document.createElement("p");
    genres.textContent = request.response[2].genres;
    movieText3.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[2].plot;
    movieText3.appendChild(plot);



    var title = document.createElement("h2");
    title.textContent = request.response[3].title;
    movieName4.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[3].cover;
    movieCover4.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[3].release_date;
    movieText4.appendChild(release_date);

    var genres = document.createElement("p");
    genres.textContent = request.response[3].genres;
    movieText4.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[3].plot;
    movieText4.appendChild(plot);



    var title = document.createElement("h2");
    title.textContent = request.response[4].title;
    movieName5.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[4].cover;
    movieCover5.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[4].release_date;
    movieText5.appendChild(release_date);

    var genres = document.createElement("p");
    genres.textContent = request.response[4].genres;
    movieText5.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[4].plot;
    movieText5.appendChild(plot);



    var title = document.createElement("h2");
    title.textContent = request.response[5].title;
    movieName6.appendChild(title);

    var image = document.createElement("img");
    image.src = request.response[5].cover;
    movieCover6.appendChild(image);

    var release_date = document.createElement("p");
    release_date.textContent = request.response[5].release_date;
    movieText6.appendChild(release_date);

    var genres = document.createElement("p");
    genres.textContent = request.response[5].genres;
    movieText6.appendChild(genres);

    var plot = document.createElement("p");
    plot.textContent = request.response[5].plot;
    movieText6.appendChild(plot);
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


window.addEventListener("keydown", event => {
    if (event.keyCode === 37) {
        console.log("hoi");
        plusSlides();
//        currentSlide();
//        showSlides();
    }
    if (event.keyCode === 39) {
        console.log("doei");
        plusSlides();
//        currentSlide();
//        showSlides();
    }
});
