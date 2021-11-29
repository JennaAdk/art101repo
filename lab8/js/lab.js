/**
  * Author: Jenna Adkison
  * Created: 10/14/2021
  * License: Public Domain
**/
var outputEl = document.getElementById("output");

function divideByFive(x){
  var byFive = (x % 5 == 0);
  return byFive
}

//Testing Function
console.log("Is 3745 divisable by 5?", divideByFive(3745));
console.log("Is 626 divisable by 5?", divideByFive(626));

array = [115, 23, 5, 200, 36, 350];
console.log("My Array:",array);
//show array on html
var newEl = document.createElement("p");
newEl.innerHTML = "Original Array: " + array;
//append array to output div
outputEl.appendChild(newEl);

var results = array.map(divideByFive);
//This will return whether the arrays are True or False
console.log("Testing if numbers are divisable by five:", results);
//show divided by five results on html
var newElTwo = document.createElement("p");
newElTwo.innerHTML = "Testing if numbers are divisable by five: " + results;
//append results to output div
outputEl.appendChild(newElTwo);

var results = array.map(function(x){
  var timesByThree = (x * 3);
  return timesByThree
});
//Should return original array but are now times by 3
console.log("Three Times the array:", results);
var newElThree = document.createElement("p");
newElThree.innerHTML = "Three Times the array: " + results;
output.appendChild(newElThree);
