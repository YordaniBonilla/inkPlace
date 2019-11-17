const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
var db = require('../database/mysql.js');
const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here
app.get ('/type',function (req, res) {
  db.getStyles(data => {
    res.status(200).send(data)
  })
});

app.get  ('/style', function (req,res) {
  Promise.all([
    db.getInfoByStyle(),
    db.imagesByStyle()
  ])
    .then (data => {
      res.status(200).send(data)
    })
    .catch (err => {
      console.log(err);
    })
})

app.post ('/login',function (req, res) {
  db.getUser(data => {
    res.status(200).send(data)
  })
});

app.post ('/login',function (req, res) {
  db.getApp(data => {
    res.status(200).send(data)
  })
});

module.exports = app;
