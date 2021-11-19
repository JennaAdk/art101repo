/**
* Author: Jenna Adkison
* Created: 11/9/2021
* License: no copyright
**/

function sortingHat(str){
  var length = str.length;
  var mod = length % 4;
  if (mod == 0){
    return "Gryffindor";
  }
  else if (mod == 1){
    return "Ravenclaw";
  }
  else if (mod == 2){
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

//Can you make it return a description of the Hogwart's house?
//The conditional can be replaced by an array of houses and using mod as an index.
//Can you make it so it is easy to add more houses to your list? Hint: houseArray.length
housesArray = [{title:"Gryffindor", text:"If the Sorting Hat placed you here, you would have demonstrated qualities like courage, bravery and determination."},
              {title:"Ravenclaw", text:"The Sorting Hat would only put you in this house if you demonstrated excellent wisdom, wit and a skill for learning. Ravenclaws are often known for being quite eccentric and most of the great wizarding inventors and innovators have come from this house."},
              {title:"Slytherin", text: "If the Sorting Hat placed you in this noble house, then you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you’re the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn’t let anyone see their soft side."},
              {title:"Hufflepuff", text:"If you were lucky enough to be sorted into this house, we can imagine you’re the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks."}]
