/**
  * Author: Jenna Adkison
  * Created: 10/14/2021
  * License: Public Domain
**/

//The function sorts the letters of an inputed name
function sortUserName() {
    var userName window.prompt("Hi! Please enter your name so that I can sort it.") ;
    console.log("userName =", userName);
  // split string to array
    var userNameArray = userName.split('');
    console.log("userNameArray =", userNameArray);
  // sort the Array
    var userNameArraySort = userNameArray.sort();
    console.log("userNameArraySort =", userNameArraySort);
  // joining array back to string
    var useNameSorted = userNameArraySort.join('');
    console.log("userNameSorted =", userNameSorted);
  // return
    return userNameSorted;
}

// Output
document.writeln("I've fixed your name!: ", sortUserName(), "<br>");
