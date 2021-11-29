/**
  * Author: Jenna Adkison
  * Created: 10/14/2021
  * License: Public Domain
**/

//shuffle the user name
// code source found from - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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

//The function sorts the letters of an inputed name
function sortUserName(userName) {
    //var userName = window.prompt("Hi! Please enter your name so that I can sort it.") ;
  //  console.log("userName =", userName);
    var userName = userName.toLowerCase();
    console.log("userName =",userName);
  // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
  // sort the Array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
  // joining array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
  // return
    return nameSorted;
}

// combining the shuffle function with the sorted function
function shuffleSortedName(userName) {
  //split string to array and covert to all lower case
  var nameArray = userName.toLowerCase().split("");
  console.log("userName =", userName);
  //connecting the shuffle function
  var shuffledNameArray = shuffle(nameArray);
  //joining array back into string
  console.log("shuffledNameArry =", shuffledNameArray);
  var newShuffledName =  shuffledNameArray.join("");
  //return function
  return newShuffledName
}
// Output
function nameOutputs () {
  var userName = window.prompt("Hi! Please enter your name so that I can sort it.");
  console.log("userName =", userName);
  var sortedName = sortUserName(userName);
  document.writeln("I've fixed your name!: ", sortedName, "</br>");
  var shuffledName = shuffleSortedName(userName);
  document.writeln("<div class='newName'>", shuffledName, "</div>")
}

nameOutputs()
