// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "./../view.html"))
  })

  app.get("/pog", function(req, res){
    res.sendFile(path.join(__dirname+ "./../public/html/pog.html"))

  });

  app.get("/rps", function(req, res) {
    res.sendFile(path.join(__dirname + "./../public/html/rps.html"));
  });

  app.get("/simon", function(req, res) {
    res.sendFile(path.join(__dirname + "./../public/html/simon.html"));
  });

  app.get("/card", function(req, res) {
    res.sendFile(path.join(__dirname + "./../public/html/blackjackworking.html"));
  });


};