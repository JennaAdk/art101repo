/**
  * Author: Jenna Adkison
  * Created: 10/14/2021
  * License: Public Domain
**/

//The function sorts the letters of an inputed name
function sortUserName() {
    var userName = window.prompt("Hi! Please enter your name so that I can sort it.") ;
    console.log("userName =", userName);
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

// Output
document.writeln("I've fixed your name!: ", sortUserName(), "</br>");
