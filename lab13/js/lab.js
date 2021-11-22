/**
* Author: Jenna Adkison
* Created: 11/20/2021
* License: no copyright
**/
// Create a "FizzBuzz" function similar to how we did in class.
// Loop through numbers 1 to 200, listing them as you go
  for (var i=1; i<200; i++){
    var str = "";
    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
        console.log("FizzBuzzBoom!");
        str +=  "FizzBuzzBoom!";
    }
    // If the number is a multiple of 5, it should print "Fizz!"
    else if (i % 3 == 0){
        console.log("Fizz!");
        str +=  "Fizz!";
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    else if (i % 5 == 0){
        console.log("Buzz!");
        str +=  "Buzz!";
    }
    // If the number is a multiple of 7, it should print "Boom!"
    else if (i % 7 == 0){
        console.log("Boom!");
        str +=  "Boom";
    }
    //Task x- adding another factor- if the number is a multiple of 8, it should print "Bang!"
    else if ( i % 8 == 0){
        console.log("Bang!");
        str +="Bang!";
    }
    else {
      //console.log(i);
        str += i;
    }
    // Make it so the output of your program appears in your output div.
    $("#output").append("<p>" + str + "</p>");
}
