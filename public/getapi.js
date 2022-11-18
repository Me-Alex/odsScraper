
// var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";

// // function httpGet(theUrl)
// // {
// //     var xmlHttp = new XMLHttpRequest();
// //     console.log("cekafjdkalfja dklfj alskfj a ");
// //     xmlHttp.open( "GET", theUrl ); // false for synchronous request
// //     console.log("cekafjdkalfja dklfj alskfj a ");
// //     xmlHttp.send( null );
// //     console.log(xmlHttp);
// //     return xmlHttp.responseText;
// // }

// // httpGet(theUrl);

let efortunaUrl = "https://odds--scraper.herokuapp.com/efortuna/";
// let betanoUrl = "http://localhost:3000/betano/";
// let betanoUrl1 = "http://localhost:3000/betano1/";

// var asta;


// //efortuna
fetch(efortunaUrl).then(res => res.json()).then((data) => {
    console.log("EFORTUNA");
    var vreauJSON = {

    };
    vreauJSON = JSON.parse(data);
    console.log(vreauJSON);

});
// fetch(betanoUrl1).then(res => res.json()).then((data) => {
//     console.log("betano1");
//     var vreauJSON = {

//     };
//     vreauJSON = JSON.parse(data);
//     console.log(vreauJSON.data);

// });
// //betano
// fetch(betanoUrl).then(res => res.json()).then((data) => {
//     console.log("BETANO");
//     var vreauJSON = {

//     };
//     vreauJSON = JSON.parse(data);
//     console.log(vreauJSON.data);

//     vreauJSON = vreauJSON.data.blocks;


//     let body = document.querySelector('body');

//     let copyContainer = document.querySelector('.container');
//     copyContainer.outerHTML = "";
//     fetch("http://localhost:3000/link/").then(res => res.json()).then((linkData) => {
//         console.log("link");
//         console.log(linkData);
//         for (let i = 0; i < linkData.link.length; i++) {
//             var link = "http://localhost:3000/links" + i;
//             // console.log('am intrat aici ' + link);
//             fetch(link).then(res => res.json()).then((ddata) => {
//                 if (i == linkData.link.length - 1) {
//                     for (let i = 0; i < ddata.data1.length; i++) {
//                         var ddataToJson = {};
//                         ddataToJson = JSON.parse(ddata.data1[i]);
//                         ddata.data1[i] = ddataToJson;
//                     }
//                     console.log(ddata);
//                     //am pus i=1 deocamdata pentru ca [0] -> este null
//                     for (let i = 0; i < ddata.data1.length; i++) {
//                         if (ddata.data1[i] != null) {

//                             copyContainer.childNodes[1].innerHTML = ddata.data1[i].data.event.name + "-> BETANO";
//                             //primele 3 cote   1  X  2
//                             copyContainer.childNodes[3].childNodes[1].childNodes[3].innerHTML = ddata.data1[i].data.event.markets[0].selections[0].price;
//                             // console.log(ddata.data1[i].data.event.markets[0].selections[0].price);
//                             copyContainer.childNodes[3].childNodes[3].childNodes[3].innerHTML = ddata.data1[i].data.event.markets[0].selections[1].price;
//                             copyContainer.childNodes[3].childNodes[5].childNodes[2].innerHTML = ddata.data1[i].data.event.markets[0].selections[2].price;
//                             for (let j = 0; j < ddata.data1[i].data.event.markets.length; j++) {

//                                 if (ddata.data1[i].data.event.markets[j].name == "Niciun pariu pe egal") {
//                                     copyContainer.childNodes[5].childNodes[1].childNodes[3].innerHTML = ddata.data1[i].data.event.markets[j].selections[0].price;
//                                     copyContainer.childNodes[5].childNodes[5].childNodes[2].innerHTML = ddata.data1[i].data.event.markets[j].selections[1].price;
//                                     body.innerHTML += copyContainer.outerHTML;

//                                 }
//                                 break;

//                             }
//                         }
//                     }
//                 }
//             });


//             // console.log("aici nr obiectului " + vreauJSON.length);

//         }
//     });
//     console.log(copyContainer.childNodes[3].childNodes[5].childNodes[2].innerHTML);
//     console.log(body);


// });







// // let vreauJson=returnThis();


