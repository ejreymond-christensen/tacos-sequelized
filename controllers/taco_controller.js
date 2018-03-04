var db = require("../models");
var express = require("express");
var router = express.Router();


module.exports =function(app){
  app.get("/", function(req, res) {
    db.tacos.findAll().then(function(data){
      var tacoObject = {
            taco: data
          };
            res.render("index", {taco: data});
    });

    });
  app.post("/api/tacos", function(req, res) {
    db.tacos.create({
      taco_name: req.body.taco_name,
      devoured: 0
    }).then(function(data){
      res.json("index");
    });
  });

  app.put("/api/tacos/:id", function(req, res) {
      db.tacos.update({
        devoured: req.body.devoured}, {
          where: {id: req.params.id
      },}).then(function(){
        res.json("index");
      });
  });
};
