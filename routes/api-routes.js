// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// var orm = require("../config/orm.js");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    //   // GET route for getting all of the todos
    //   app.get("/api/burgers", function(req, res) {
    // // Add a Sequelize findAll method inside the GET route 
    //     // which finds all of the todos and returns them to the user as JSON.
    //     db.Burger.findAll({}).then(function(results){
    //       res.json(results);
    //     });
    //   });
    app.get("/api/players", function(req, res){
        db.Player.findAll({}).then(function(results){
            res.json(results);
        })
    })
    
    app.post("/api/players", function(req, res){
        db.Player.create({
            playerName: req.body.playerName,
            password: req.body.password
        }).then(function(results){
            res.json(results);
        })
    })

    //   // POST route for saving a new todo. We can create a todo using the data on req.body
    //   app.post("/api/burgers", function(req, res) {
    // // Add a Sequelize create method to the POST route 
    //     // to save a new todo to the database using the data sent to the server in req.body.
    //     db.Burger.create({
    //       name: req.body.name,
    //       devoured: false
    //     }).then(function(results){
    //       res.json(results);
    //     });
    //   });

    //   // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
    //   // req.params.id
    //   app.delete("/api/burgers/:id", function(req, res) {
    //     db.Burger.destroy({
    //       where: {
    //         id: req.params.id
    //       }
    //     }).then(function(results){
    //       res.json(results);
    //     });
    //     // Use the sequelize destroy method to delete a record from our table with the
    //     // id in req.params.id. res.json the result back to the user
    //   });



    // //PUT route for updating Burgerss. We can get the updated todo data from req.body
    //   app.put("/api/burgers", function(req, res) {
    //     var updatedVersion = {
    //       name: req.body.name,
    //       devoured: req.body.devoured
    //     }
    //     db.Burger.update(updatedVersion,{
    //       where: {
    //         id: req.body.id
    //       }
    //     }).then(function(results){
    //       res.json(results);
    //     });
    //   });
};