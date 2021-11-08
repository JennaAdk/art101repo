/**
  * Author: Jenna Adkison
  * Created: 11/7/2021
  * License: no copyrights
  **/

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:

// Find the section you want to add the button to
var chDivEl = $("#challenge");
var pDivEl = $("#problems");
var rDivEl = $("#results");

// Create the button, Give it a text label, Add it to the section
var chButtonEl = $(chDivEl).append("<button id='chbutton'>TOGGLE");
var pButtonEl = $(pDivEl).append("<button id='pbutton'>TOGGLE");
var rButtonEl = $(rDivEl).append("<button id='rbutton'>TOGGLE");


// Using jQuery, do the following for each button:

// Add a click event to each button. Find the challenge, problems, or results section the button is in.
//Toggle a class special within the <div> of the section
$(chButtonEl).click(function(){
  $(chButtonEl).toggleClass("special");
});
$(pButtonEl).click(function(){
  $(pButtonEl).toggleClass("special");
});
$(rButtonEl).click(function(){
  $(rButtonEl).toggleClass("special");
});
