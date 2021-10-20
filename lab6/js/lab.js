/**
  * Author: Jenna Adkison
  * Created: 10/14/2021
  * License: Public Domain
**/

//Declare an array myTransport that lists all of the forms of transportation you use to get around.
myTransport = ["Jeep", "Subaru", "Train", "Walk", "Bike", "Skates"];

myMainRide = {
  make: "Jeep",
  model: "Wrangler",
  color: "Green",
  year: "1998",
  age: function() {
    return 2021 - age;
  }
}

//Use document.writeln() to neatly print the both myTransport and myMainRide
document.writeln("Transportations I Use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre> ",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
