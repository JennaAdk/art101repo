/**
  * Author: Jenna Adkison
  * Created: 11/2/2021
  * License: Public Domain
**/

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

// Borrow the nameSort() function or my anagram() function from Lab 7.
// Attach an event listener to your button that does the following:
function sortNameInHtml() {

 // Gets the value of your input field
  var input = document.getElementById("userName");
  var name = input.value;
//Runs that value through your sort() or anagram() function and saves the results.
  let sortedName = sortUserName(name);
// Replaces the html in <div id=output> with the results.
  var outputEl = document.getElementById("output");
  outputEl.innerHTML ="Hello, " + sortedName;
  outputEl.style.fontSize= "30px";
  outputEl.style.fontFamily= "helvetica";

}


var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", sortNameInHtml);
