 // wrapping everything in doc ready 
jQuery(document).ready(function() {
// array to push new sports
var topics = [];

function giphy() {
var x = $(this).data("search");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=0gWEFLhXc04LoWVN5gzLkGNUo3obXk50&limit=9";
 
  $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
          var displayGifs = $("<div class='displayGify'>");
          var rating = results[i].rating;
          var defaultAnimatedSrc = results[i].images.fixed_height.url;
          var staticSrc = results[i].images.fixed_height_still.url;
          var image = $("<img>");
          var para = $("<p>").text("rated: " + rating);
          image.attr("src", staticSrc);
          image.attr("data-state", "still");
          image.attr("data-still", staticSrc);
          image.attr("data-animate", defaultAnimatedSrc);
          displayGifs.append(para);
          displayGifs.append(image);
          $("#displayGify").prepend(displayGifs);

        }
  });
}
  // on click display content
  $(document).on("click", ".sport", giphy);

//  
});
