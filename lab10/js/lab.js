/**
  * Author: Jenna Adkison
  * Created: 11/2/2021
  * License: Public Domain
**/

//shuffle the user name
// code source found from -
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function sortUserName(name) {
  // split string to array
    var nameArray = name.split('');
  // sort the Array
    var nameArraySort = nameArray.sort();
  // joining array back to string
    var nameSorted = nameArraySort.join('');
  // return
    return nameSorted;
}

//combine sortUserName and shuffleName(array)
function shuffleSortedName(name) {
  //split string to array and covert to all lower case
  var nameArray = name.toLowerCase().split("");
  console.log("userName =", name);
  //connecting the shuffle function
  var shuffledNameArray = shuffle(nameArray);
  //joining array back into string
  console.log("shuffledNameArry =", shuffledNameArray);
  var newShuffledName =  shuffledNameArray.join("");
  //return function
  return newShuffledName
}

// Borrow the nameSort() function or my anagram() function from Lab 7.
// Attach an event listener to your button that does the following:
function sortNameInHtml() {

 // Gets the value of your input field
  var input = document.getElementById("userName");
  var name = input.value;
//Runs that value through your sort() or anagram() function and saves the results.
  let sortedName = shuffleSortedName(name);
// Replaces the html in <div id=output> with the results.
  var outputEl = document.getElementById("output");
  outputEl.innerHTML = "Hello, " + sortedName;
  outputEl.style.fontSize= "30px";
  outputEl.style.fontFamily= "helvetica";

}
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", sortNameInHtml);
