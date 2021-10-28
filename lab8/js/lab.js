/**
  * Author: Jenna Adkison
  * Created: 10/14/2021
  * License: Public Domain
**/

function divideByFive(x){
  var byFive = (x % 5 == 0);
  return byFive
}


//Testing Function
console.log("Is 3745 divisable by 5?", divideByFive(3745));
console.log("Is 626 divisable by 5?", divideByFive(626));

array = [115, 23, 5, 200, 36, 350];
console.log("My Array:",array);

var results = array.map(divideByFive)
//This will return whether the arrays are True or False
console.log("Testing if numbers are divisable by five:", results);

var results = array.map(function(x){
  var timesByThree = (x * 3);
  return timesByThree
})
//Should return original array but are now times by 3
console.log("Three Times the array:", results);


/** var outputEl = document.getElementById("output");
outputEl.innerHTML = results; // put your results here **/
