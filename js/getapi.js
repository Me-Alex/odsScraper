
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



// fetch(theUrl).then(res=>res.json()).then(data=>console.log(data));

fetch("https://api.efortuna.ro/live3/api/live/matches/overview").then(res => res).then(d => {
    console.log(d.json())
});