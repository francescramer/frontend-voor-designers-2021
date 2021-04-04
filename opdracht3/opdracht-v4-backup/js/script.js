var json = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var main = document.querySelector("main");

var request = new XMLHttpRequest();
request.open('get', json);
request.responseType = 'json';
request.send();

request.addEventListener("load", function () {
    console.log("data is geladen")
    console.log(request.response);
    console.log(request.response[0].title);

    var h2 = document.createElement("h2");
    h2.textContent = request.response[0].title;
    main.appendChild(h2);

    var image = document.createElement("img")
    image.src = request.response[0].cover;
    main.appendChild(image);  
})
