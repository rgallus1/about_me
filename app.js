'use strict';
/* always use this */
// //Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.//*

var username = prompt('Hello, what is your name?');
alert('Hello ' + username + ' and welcome to a guessing game about Rose Anne');

var response1 = prompt('Does Rose Anne have any hobbies?').toLowerCase();

if (response1 === 'yes' || response1 === 'y') {
  alert('Yes, Rose Anne does have hobbies!');
  console.log('Does Rose Anne have hobbies?');
  console.log(response1);
}
else if (response1 === 'no' || response1 === 'n') {
  alert('Sorry Rose Anne doesn\'t have any hobbies!');
  console.log('Does Rose Anne have hobbies?');
  console.log(response1);
}
else {
  alert('Please enter a yes/y or no/n');
  console.log('The user didn\'t answer yes or no.');
  console.log(response1);
}
var response2 = prompt('Do you know if Rose Anne likes to travel?').toUpperCase();

if (response2 === 'YES' || response2 === 'Y') {
  alert('Yes, Rose Anne does like to travel!');
  console.log('Does Rose Anne like to travel?');
  console.log(response2);
}
else if (response2 === 'NO' || response2 === 'N') {
  alert('Sorry Rose Anne doesn\'t like to travel!');
  console.log('Does Rose Anne like to travel?');
  console.log(response2);
}
else {
  alert('Please enter a YES/Y or NO/N');
  console.log('The user didn\'t answer yes or no.');
  console.log(response2);
}


var response3 = prompt('Do you know if Rose Anne likes to sing?').toUpperCase();

if (response3 === 'YES' || response3 === 'Y') {
  alert('Yes, Rose Anne does like to sing!');
  console.log('Does Rose Anne like to something?');
  console.log(response2);
}
else if (response3 === 'NO' || response3 === 'N') {
  alert('Sorry Rose Anne doesn\'t like to sing!');
  console.log('Does Rose Anne like to sing?');
  console.log(response3);
}
else {
  alert('Please enter a YES/Y or NO/N');
  console.log('The user didn\'t answer YES or NO.');
