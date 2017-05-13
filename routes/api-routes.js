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
        console.log(req.body)
        db.Player.findOrCreate({
            where: {
                playerName: req.body.playerName
            },
            defaults: {
                password: req.body.password
            }
        }).then(function(results){
            // console.log("results", results.datavalues);
            // console.log("results.password", results.password);
            console.log("req.body.password", req.body.password);
            if(results[0].password !== req.body.password) {
                // alert('this username already exists.');
                // res.redirect('/');
                res.json({response: 'this password is not correct'});
            } else {
                res.json(results);
            }
        }).catch(function(error){
            console.log(error);
            res.end();
        })
    });


  // PUT route for updating scoress
  app.put("/api/players", function(req, res) {
    // Add code here to update a score using the values in req.body, 
    // where the id is equal to req.body.id 
    // and return the result to the user using res.json
    var updatedVersion = {
      simonHiScore: req.body.simonHiScore,
      pogNumOfWins: req.body.pogNumOfWins,
      blackJackHiScore: req.body.blackJackHiScore,
      rpsNumOfWins: req.body.rpsNumOfWins
    }
    
    db.Player.update(updatedVersion, {
      where: {
        id: req.body.id
      }
    }).then(function(results){
      res.json(results);
    })
  });


  app.post('/api/pogwins', function(req, res){
      var updatedPlayer = { "pogNumOfWins": req.body.pogNumOfWins+1 };
      console.log(req.body);
      db.Player.findOne({
          where:
            {
                playerName: req.body.currentName
            }
      }).then(function(player){
          console.log(player);
              player.updateAttributes({
                  pogNumOfWins: player.pogNumOfWins+1
          })
      })
  })

  app.post('/api/rpswins', function(req, res){
      console.log('req.body: '+req);
      var updatedPlayer = {"rpsNumOfWins": req.body.rpsNumOfWins+1};
      db.Player.findOne({
          where:
            {
                playerName: req.body.currentName
            }
      }).then(function(player){
          console.log('player: '+player);
          player.updateAttributes({
              rpsNumOfWins: player.rpsNumOfWins+1
          })
      })
  })

  app.post('/api/simonUpdate', function(req, res){
      //var updatedPlayer = { "pogNumOfWins": req.body.pogNumOfWins+1 };
      console.log(req.body);
      db.Player.findOne({
          where:
            {
                playerName: req.body.currentName
            }
      }).then(function(player){
          console.log(player);
          if (player.simonHiScore < req.body.simonHiScore) {
            player.updateAttributes({
                  simonHiScore: req.body.simonHiScore
            })
            // NewSimonFunction(req.body.simonHiScore);
          }  
      })
  })



    app.post('/api/cardUpdate', function(req, res){
      console.log(req.body);
      db.Player.findOne({
          where:
            {
                playerName: req.body.currentName
            }
      }).then(function(player){
          console.log(player);
          if (player.blackJackHiScore < req.body.blackJackHiScore) {
            player.updateAttributes({
                  blackJackHiScore: req.body.blackJackHiScore
            })
          }  
      });

  })

//   {
//       currentUser: "bob",
//       simonHiScore: 1000
//   }

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