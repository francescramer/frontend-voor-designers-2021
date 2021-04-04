# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data
Voor deze opdracht moest ik een functionaliteit ontwerpen met externe data. 


## Een interactie uitwerken met externe data
Ik koos bij dit project voor de aangeboden [Movies API](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json). Dit deed ik omdat ik merkte dat ik het best lastig vond om JSON goed te begrijpen en op deze manier kon ik gemakkelijker aan de docent hulp vragen, aangezien hij deze code zelf heeft geschreven.


### Versies
Ik heb tussendoor verschillende versies gemaakt en opgeslagen, maar deze waren allemaal niet af. Ik heb verschillende methodes geprobeerd om de JSON data te laden en deze staan allemaal nog als losse versies opgeslagen. Ook heb ik tussendoor een soort backup gemaakt, voor het geval dat ik de code zou verpesten dan had ik een backup om naar terug te gaan. 

#### Versie 0: Breakdown schets
![Breakdown schets van mijn idee](https://github.com/francescramer/frontend-voor-designers-2021/blob/main/opdracht3/opdracht-v4/img/breakdownschets.png)
In mijn breakdown schets heb ik een general idee neer gezet. Ik wist nog niet precies hoe ik het ging doen, want dit vond ik heel lastig om zomaar even snel neer te zetten.

#### Versie 1: Movies JSON laden met behulp van een Youtube video
Ik begon met een poging om de tutorial te doen, alleen had ik verkeerd begrepen dat ik eerst gewoon die data moest gebruiken in plaats van proberen mijn eigen data in te vullen. Hierdoor snapte ik er heel weinig van en ben ik zelf een [tutorial](https://www.youtube.com/watch?v=DG4obitDvUA) gaan zoeken. Deze heb ik nagedaan en dit ging best goed. 

#### Versie 2: Json laden met behulp van de aangeboden tutorial
Tijdens de les kwam ik er achter dat ik eigenlijk niet zo goed snapte dat ik in de youtube tutorial had gedaan en kreeg ik de tip om toch nog eens de [aangeboden tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) te proberen. Dit lukte uiteindelijk wel, maar nog steeds snapte ik niet precies wat er gebeurde. Toen heb ik geprobeerd om bij elke regel code te schrijven wat ik dacht dat die regel deed. 

#### Versie 3: Movies JSON laden met behulp van de aangeboden tutorial
Hierna starte ik met mijn [gekozen API](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json) te verwerken in deze code. Ik dacht dat dit best goed ging, maar ik kreeg constant "Hometown: undefined // Formed: undefined" in mijn scherm. Gelukkig was later deze middag het vragenuur en kon ik vragen wat er mis ging.

#### Versie 4 - backup: Een backup voor het geval dat ik mijn code zou verpesten.
Tijdens het vragenuur deed de docent een stukje code voor en heb ik hierbij meegeschreven, zodat ik hierop verder kon. Hierdoor werd het allemaal een stuk duidelijker voor mij. Wanneer ik dit onder de knie had heb ik een backup gemaakt zodat ik hierop kon terugvallen als dat nodig was.

#### Versie 4: Movies JSON laden met behulp van het vragenuur
Ik ben gewoon verder gegaan in mijn versie 4. Na het laden van de JSON heb ik wat elementen van [opdracht 2](https://francescramer.github.io/frontend-voor-designers-2021/opdracht2/opdracht-v3/) overgenomen en gebruikt. Wanneer dit allemaal gelukt was heb ik geprobeerd om een keydown event toe te voegen, dit kostte heel wat werk en frustratie maar is uiteindelijk wel gelukt. 

Bekijk hier mijn [eindresultaat](https://francescramer.github.io/frontend-voor-designers-2021/opdracht3/opdracht-v4/).


## Interface
Ik heb gekozen om niet te veel informatie op de pagina te laten zien. Dit onder andere omdat ik het best ingewikkeld vond en al best veel tijd nodig had om dit voor elkaar te krijgen. Als ik nu nog een week de tijd had gehad dan had ik wel meer informatie op de pagina's willen laten zien. Ik vond het wel heel interessant en ik ga zeker nog eens experimenteren met JSON data.


### Principles of User Interface Design
[Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)

#### Principle 4: Keep users in control
Dit houdt in dat je de gebruiker in controle probeert te houden door elementen te gebruiken die de gebruiker al kent. Dit heb ik toegepast door maar een beperkt aantal acties mogelijk te maken. Ik heb twee buttons gemaakt die zorgen dat de gebruiker de carousel kan gebruiken. Ook heb ik het mogelijk gemaakt om de carousel te "besturen" met twee pijltjes op het toetsenbord. 

#### Principle 8: Provide a natural next step
Dit houdt in dat je de gebruiker een logische volgende stap geeft. Dit is bij mij bijvoorbeeld de stap naar een volgende foto, dit doe je met de buttons of de pijltjes op je toetsenbord. Dit is logisch voor de gebruiker, want zo kunnen ze alle films bekijken.

#### Principle 9: Appearance follows behavior
Dit houdt in dat de manier dat een element eruit ziet moet passen bij de houding en het gedrag van het element. Dit heb ik gedaan door de buttons om naar de volgende of vorige foto te gaan pijltjes te geven die naar rechts en links wijzen. Ook heb ik wanneer je erover hovert een bachground color toegevoegd waardoor de pijltjes nog meer opvallen en verandert de kleur van de pijltjes zodat deze zichtbaar blijven.

#### Principle 11: Strong visual hierarchies work best
Een sterke visuele hiërarchie wordt bereikt wanneer er een duidelijke kijkvolgorde is naar de visuele elementen op een scherm. Dit heb ik toegepast door een duidelijke titel te tonen en daarna direct de carousel te plaatsen. Direct bovenaan staat de titel van de film, links hieronder staat de cover van de film en rechts staat de release datum, de genres en het plot van de film.


### UI events
[UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) 

#### Click Event
Ik heb twee buttons en wanneer je op deze buttons klikt gaat hij naar de volgende of de vorige film. 

#### Keydown Event
Ik heb ook een keydownEvent gebruikt om naar de volgende of vorige film te gaan. 


### States uit de UI stack
[UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/)

#### Ideal State
Dit is de eerste state die je maakt. Het is de state die men het meeste ziet. Voor mijn project is dit de pagina waarop één van de films staat weergegeven. 

#### Empty State
Deze state is de state die de gebruiker als eerste ziet wanneer hij het product voor het eerste gebruikt. Deze staat zorgt voor de eerste indruk van de gebruiker. Bij mijn project is dit de pagina waarop de eerste film staat weergegeven. 

#### Loading State
Deze state laat zien wat er gebeurd als de data wordt geladen. Bij mijn project is dat aan het begin, dan is het scherm nog leeg. Maar ook wanneer er op de pijltjes wordt geklikt. De data wordt geladen en er komt een fade effect. De oude data fade weg en de nieuwe komt ervoor in de plaats.


## Code


### JSON
Voor het laden van de JSON data heb ik gebruik gemaakt van XMLHttpRequest, hiermee maak ik de JSON data accessible. Hierna maak ik een functie aan om de data daadwerkelijk te laden. Hierin maak ik variabelen aan en hiermee creëer ik een element. Bijvoorbeeld h2, img of p. Dan roep ik de JSON data aan die in dit element moet staan. Ten slotte plaats het element in de juiste section of div die hiervoor is bedoeld. Dit doe ik voor alle data die ik op de pagina wil zien. 


### Carousel



### Keydown Events




## Bronnen
Ik heb veel gebruik gemaakt van het internet voor dit project. Onder andere omdat ik JavaScript best wel lastig vind. 


### Zelf opgezochten bronnen
[Tutorial carousel](https://www.w3schools.com/howto/howto_js_slideshow.asp)

[Youtube tutorial JSON laden](https://www.youtube.com/watch?v=DG4obitDvUA)

[Keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)


### Aangeboden bronnen
[Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)

[UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) 

[UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/)

[MDN tutorial JSON laden](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

[Movies API](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json)











