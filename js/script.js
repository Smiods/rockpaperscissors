// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var w = "User Win";
var t = "Tie";
var c = "Computer Win";

$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
    var randomNumber = Math.random();
    userChoice = $("#input").val();
    
    if (randomNumber > 0 && randomNumber < 0.33) {
        computerChoice = "scissors";
        $("#computerChoice").text(computerChoice);
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = "rock";
        $("#computerChoice").text(computerChoice);
    } else if (randomNumber > 0.66 && randomNumber < 1) {
        computerChoice = "paper";
        $("#computerChoice").text(computerChoice);
    }
    
    if (userChoice === "scissors" && computerChoice === "scissors") {
        $("#result").text(t);
    } else if (userChoice === "rock" && computerChoice === "rock") {
        $("#result").text(t);
    } else if (userChoice === "paper" && computerChoice === "paper") {
        $("#result").text(t);
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        $("#result").text(c);
    } else if (userChoice === "rock" && computerChoice === "paper") {
        $("#result").text(c);
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        $("#result").text(c);
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        $("#result").text(w);
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        $("#result").text(w);
    } else if (userChoice === "paper" && computerChoice === "rock") {
        $("#result").text(w);
    } else {
        $("#result").text('Please input "rock" or "paper" or "scissors"!');
    }
});


// DOCUMENT READY FUNCTION BELOW

