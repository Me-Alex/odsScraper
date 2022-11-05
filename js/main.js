import puppeteer from "puppeteer";
import https from "https";
import http from "http";
import fs from "fs";
import cors from "cors";

const screenShot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://ro.betano.com');
    await page.screenshot({ path: 'example.png' });
    let selector = ".sb-modal__close__btn";
    await page.click(selector);
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'example2.png' });
    await browser.close();

};


// screenShot();

// var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";



// https.get(theUrl, (resp) => {
//     let data = '';
//     let chunk = '';
//     console.log("sunt aici");
//     // A chunk of data has been received.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });
//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         // console.log(JSON.parse(data));
//         console.log("inainte");
//         data = JSON.parse(data);
//         console.log(data[0].leagues[0].matches);
//     });

// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });


http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(3000);