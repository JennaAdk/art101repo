/**
* Author: Jenna Adkison
* Created: 11/20/2021
* License: no copyright
**/

var myUrl = "https://leslie-knope-quotes.herokuapp.com/quotes";

$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",

  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      $("#output").html(JSON.stringify(data));
  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);
      $("#output").html("Error")

	})

}
