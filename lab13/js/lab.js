/**
* Author: Jenna Adkison
* Created: 11/20/2021
* License: no copyright
**/

  for (var i=1; i<200; i++){
    var str = "";
    if (i % 3== 0 && i % 5==0 && i % 7 == 0) {
      //console.log("FizzBuzzBoom!");
        str +=  "FizzBuzzBoom!";
    }
    else if (i % 3 ==0){
      //console.log("Fizz!");
        str +=  "Fizz!";
    }
    else if (i % 5 ==0){
      //console.log("Buzz!");
        str +=  "Buzz!";
    }
    else if (i % 7 ==0){
      //console.log("Boom!");
        str +=  "Boom";
    }
    else {
      //console.log(i);
        str += i;
    }
    $("#output").append("<p>" + str + "</p>");
}
