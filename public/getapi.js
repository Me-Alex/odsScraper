
var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     console.log("cekafjdkalfja dklfj alskfj a ");
//     xmlHttp.open( "GET", theUrl ); // false for synchronous request
//     console.log("cekafjdkalfja dklfj alskfj a ");
//     xmlHttp.send( null );
//     console.log(xmlHttp);
//     return xmlHttp.responseText;
// }

// httpGet(theUrl);

let efortunaUrl = "http://localhost:3000/efortuna/";
let betanoUrl = "http://localhost:3000/betano/";


//efortuna
fetch(efortunaUrl).then(res => res.json()).then((data) => {
    console.log("EFORTUNA");
    let d = JSON.stringify(data);
    d=JSON.parse(d);
    var vreauJSON={
        d
    };

    vreauJSON=d;
    vreauJSON=JSON.parse(vreauJSON);
    console.log(vreauJSON);

});
//betano
fetch(betanoUrl).then(res => res.json()).then((data) => {
    console.log("BETANO");
    let d = JSON.stringify(data);
    d=JSON.parse(d);
    var vreauJSON={
        d
    };
    vreauJSON=d;
    vreauJSON=JSON.parse(vreauJSON);
    console.log(vreauJSON.data.blocks[0].events);


});


