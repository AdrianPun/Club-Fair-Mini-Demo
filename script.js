// This is the JavaScript file. It controls what the page DOES when you click things.
//
// Lines that start with two slashes, like this one, are notes for humans.
// The computer skips them.
//
// Computers are very picky: spelling, capital letters and brackets
// all have to be exactly right. If something stops working, check those first.


// STEP 1: Find the heading and the button on the page.
// We look them up by the name tags (ids) we gave them in index.html.
// "let" means: from now on, the word "message" stands for the heading,
// and the word "button" stands for the button.
let message = document.getElementById("message");
let button = document.getElementById("my-button");


// STEP 2: Tell the button what to do when someone clicks it.
// Everything between the curly brackets { } runs every time it's clicked.
button.addEventListener("click", function () {

  // STEP 3: Change the words inside the heading.
  // The quote marks " " tell the computer this is text. Keep them!
  // TRY THIS: change You clicked the button! to your own message.
  message.textContent = "You clicked the button!";

  // TRY THIS: delete the two slashes at the start of the next line, save, and refresh.
  // message.style.color = "crimson";


  //TRY THIS: See if you can get the message to change after clicking the button
  //twice. How about after 3 times? How about cycling between 3 messages
  //with each button click?
});
