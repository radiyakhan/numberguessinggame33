#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) user import a guessing number

// 3) compare user input with computer genetaed number and show result 

const randomNumber = Math.floor(Math.random() * 10 + 1); 
// console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
console.log(answer);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congtratulations🥳! You Guessed right number.");
} 
else {
    console.log("Oops 😔 You Guessed wrong number.");
}