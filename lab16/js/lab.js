/**
* Author: Jenna Adkison
* Created: 11/20/2021
* License: no copyright
**/




var myUrl = "https://xkcd.com/info.0.json";

$("#activate").click(comicAjax);

function comicAjax() {
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

      var comicObj = data
      var titleTxt = comicObj.title;
      $("#title").html(titleTxt);

      var imgUrl = comicObj.img;
      var imgAlt = comicObj.alt
      var imgTag = "<img src=" + imgUrl +" " + "alt =" + imgAlt + ">";
      console.log(imgUrl, imgTag, imgAlt);
      $("#output").html(imgTag);

  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);

	})

}
