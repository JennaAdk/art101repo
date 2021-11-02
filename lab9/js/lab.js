/**
  * Author: Jenna Adkison
  * Created: 10/30/2021
  * License: Public Domain
**/


//referencing to <div> "output"
var outputEl = document.getElementById("output");

//creating new paragraph elements
var new1El = document.createElement("p");
new1El.innerHTML = "Does this thing work?";

var new2El = document.createElement("p");
new2El.innerHTML ="I think it works!";

// appending the new elements to the <div> "output"
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//css attributes
new1El.style.color= "red";
new2El.style.color= "green";
new1El.style.fontSize= "25px";
new2El.style.fontSize= "25px";



// Task X:
//appending an Element to the top
var new3El = document.createElement("p");
new3El.innerHTML = "*cough cough*";
outputEl.prepend(new3El);

//css attributes
new3El.style.color = "blue";
new3El.style.fontSize= "25px";
//DOM element -accessKey
document.getElementById("home").accessKey = "j";
