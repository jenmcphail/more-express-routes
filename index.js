
var express = require("express");
var app = express();

//Pick a Color
Solution doesn't work. Unsure how to fix. Solution from solution code below.

app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});

//
//Which Taco
var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/taco/:index", function(req, res){
	var index = req.params.index;
	var tacosIndex = tacos[index] || "Sorry, that's not a taco option";
	res.send(tacosIndex)
})

var port = 3000;
app.listen(port, function(){
	console.log("Server Running at localhost:5000/")
});

//The Number Guessing Game
correctNum = 7

app.get("/pickanumber/:num", function (req, res) {
    var number = req.query.number;
    if (number > correctNum) {
        res.send("Too high!");
    } else if (number < correctNum) {
        res.send("Too low!");
    } else {
    	res.send("Nailed it!")
    }
});

