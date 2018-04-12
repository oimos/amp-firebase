const functions = require('firebase-functions');
const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('views', './views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

// const facts = [
//   {text: "Elvis"},
//   {text: "Beatles"},
//   {text: "Queen"}
// ];


app.get('/', (request, response) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  response.render('index.html');
})

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
