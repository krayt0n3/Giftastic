$( window ).on( "load", function() {

var topics = ['keanu reeves', 'joe pesci', 'ving rhames', 'bruce willis', 'john travolta', 'samuel jackson', 'uma thurman'];

function makeButton(topics){
	return `<button class="role">${topics}</button>`;
}

function renderButtons() {
    $('#buttons-view').html(topics.map(makeButton));
}

$("#add-actor").on("click", function(event) {
    event.preventDefault();
    var text = $('#actor-input').val();
    $('#buttons-view').append(topics.push(text))
    renderButtons();
  });




  $(document).on('click', '.role', function() {
    var time = $(this).text();
    console.log(time);
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=5w2DMI6qhLMH2Py6K94gID9JOICPnvaW&tag=" + time;
    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {


    function makeGif(){
        var imageUrl = response.data.image_original_url;
        var actImage = $("<img>");
        actImage.attr("src", imageUrl);
          actImage.attr("alt", "actor image");

          //
          $("#images").prepend(actImage);
      }

      $('#ratings').html(makeGif)
      console.log(response);


    });
      });
      // Calling the renderButtons function to display the initial list of movies
      renderButtons();


})