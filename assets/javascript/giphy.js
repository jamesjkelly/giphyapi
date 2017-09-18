 // wrapping everything in doc ready 
 jQuery(document).ready(function() {
     // array to push new sports
     var topics = [];
     // main function
     function giphy() {
         var x = jQuery(this).data("search");
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=0gWEFLhXc04LoWVN5gzLkGNUo3obXk50&limit=9";
         // ajax call
         jQuery.ajax({
             url: queryURL,
             method: "GET"
         }).done(function(response) {
             var results = response.data;
             for (var i = 0; i < results.length; i++) {
                 var displayGifs = jQuery("<div class='displayGify'>");
                 var rating = results[i].rating;
                 var defaultAnimatedSrc = results[i].images.fixed_height.url;
                 var staticSrc = results[i].images.fixed_height_still.url;
                 var image = jQuery("<img>");
                 var para = jQuery("<p>").text("rating: " + rating);
                 image.attr("src", staticSrc);
                 image.addClass("sportsGiphy");
                 image.attr("data-state", "still");
                 image.attr("data-still", staticSrc);
                 image.attr("data-animate", defaultAnimatedSrc);
                 displayGifs.append(para);
                 displayGifs.append(image);
                 jQuery("#displayGify").prepend(displayGifs);

             }
         });
     }
     // on click display content
     jQuery(document).on("click", "button", giphy);
     
     // this click add new buttons & topics
     jQuery("#addSports").on("click", function(event) {
         event.preventDefault();
         var newSport = jQuery("#sportsInput").val().trim();
         topics.push(newSport);
         jQuery("#addSports").val('');
         displayButtons();
         jQuery("#addSports").val('submit');

     });

     function displayButtons() {
         jQuery("#myButtons").empty();
         for (var i = 0; i < topics.length; i++) {
             var button = jQuery('<button class="btn btn-secondary">');
             button.attr("id", "show");
             button.attr("data-search", topics[i]);
             button.text(topics[i]);
             jQuery("#myButtons").append(button);
         }
     }
     // calls dislay button function
     displayButtons();
     // this function starts and stops the giphy animantion 
     jQuery(document).on("click", ".sportsGiphy", playPause);
     function playPause() {
         var state = jQuery(this).attr("data-state");
         if (state === "still") {
             jQuery(this).attr("src", jQuery(this).attr("data-animate"));
             jQuery(this).attr("data-state", "animate");
         } else {
             jQuery(this).attr("src", jQuery(this).attr("data-still"));
             jQuery(this).attr("data-state", "still");
         }
     }
 });
