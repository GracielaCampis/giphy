// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var request_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"
$("#search-button").click(function() {
  fetch(request_url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        console.log(data.url)
    })
});

