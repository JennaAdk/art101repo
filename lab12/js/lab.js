/**
* Author: Jenna Adkison
* Created: 11/9/2021
* License: no copyright
**/

function sortingHat(str){
  var length = str.length;
  if (length % 4 == 0){
    return "Gryffindor";
  }
  else if (length % 4 == 1){
    return "Ravenclaw";
  }
  else if (length % 4 == 2){
    return "Slytherin";
  }
  else {
    return "Hufflepuff";
  }
}

// Create an click listener attached to #button
$("#button").click(function(){
  // that gets the value of #input and assigns it to a variable name
    var name = $("#input").val();
  // runs sortingHat(name) and stores the result in a variable house
    var house = sortingHat(name)
    // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
    var outputText = $("#output").append(house);
    
})
