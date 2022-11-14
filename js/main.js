
const puppeteer = require('puppeteer');
const https = require('https');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const express = require('express');
app = express();
// const screenShot = async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://ro.betano.com');
//     await page.screenshot({ path: 'example.png' });
//     let selector = ".sb-modal__close__btn";
//     await page.click(selector);
//     await page.waitForTimeout(5000);
//     await page.screenshot({ path: 'example2.png' });
//     await browser.close();
// };

// screenShot();

var theUrl = "https://api.efortuna.ro/live3/api/live/matches/overview";
let urlBetano="https://ro.betano.com/api/sport/fotbal/meciurile-urmatoare-de-azi/";


app.use(express.static('public'));
// app.use(express.json());

app.get('/efortuna', (req, res) => {


    https.get(theUrl, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            // data = JSON.parse(data);
            res.json(data);
        });
    });


});
app.get('/betano', (req, res) => {


    https.get(urlBetano, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            // data = JSON.parse(data);
            res.json(data);
        });
    });


});

app.listen(3000, () => console.log("localhost:3000"));