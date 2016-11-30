'use strict';

//This code prompts the User asking 5 questions about Rose Anne
//Question Number 1 to User Asking about Hobbies
var username = prompt('Hello, what is your name?');
alert('Hello ' + username + ' and welcome to a guessing game about Rose Anne');
alert('We will be asking you a series of questions, please answer with a yes/y or no/n');

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

//Question Number 2 to User Asking about Dancing
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

//Question Number 4 to User Asking about Dancing
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
}

//Question Number 4 to User Asking about Dancing
var response4 = prompt('Does Rose Anne Dance?').toLowerCase();

if (response4 === 'yes' || response4 === 'y') {
  alert('Yes, Rose Anne dances!');
  console.log('Does Rose Anne dance?');
  console.log(response4);
}
else if (response4 === 'no' || response4 === 'n') {
  alert('Sorry Rose Anne doesn\'t dance!');
  console.log('Does Rose Anne dance?');
  console.log(response4);
}
else {
  alert('Please enter a yes/y or no/n');
  console.log('The user didn\'t answer yes or no.');
  console.log(response4);
}

//Question Number 5 to User Asking about Yodeling
var response5 = prompt('Does Rose Anne yodel?').toLowerCase();

if (response5 === 'yes' || response5 === 'y') {
  alert('Yes, Rose Anne yodels!');
  console.log('Does Rose Anne yodel?');
  console.log(response5);
}
else if (response5 === 'no' || response5 === 'n') {
  alert('Sorry Rose Anne doesn\'t yodel!');
  console.log('Does Rose Anne yodel?');
  console.log(response5);
}
else {
  alert('Please enter a yes/y or no/n');
  console.log('The user didn\'t answer yes or no.');
  console.log(response5);
}
