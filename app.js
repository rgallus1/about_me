'use strict';  /* always use this */
// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.

var question1 = prompt('Does Rose Anne have any hobbies?').toLowerCase();

//if (condition is true) {
//  do something;
//    maybe do something more;
//    etc. until done;
//} else {
//  do this other thing;
//  and maybe yet another thing;
//}

If (question1 === 'yes' || question1 === 'y') {
  alert('Yes, Rose Anne does have hobbies!');
} else if (question1 === 'no' || question1 === 'n')
  alert('Sorry Rose Anne doesn\'t have any hobbies!');
} else {
  alert('Please enter a yes/y or no/n');
}
