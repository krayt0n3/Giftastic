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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + time + "&api_key=5w2DMI6qhLMH2Py6K94gID9JOICPnvaW&limit=1";
    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {


    function makeGif(){
        for (var i = 0; i < response.data.length; i++){
            return `
            <h2>${response.data[i].rating}</h2>
            ` 
        }
      }

      $('#gif-view').html(makeGif)
      console.log(response);


    });
      });
      // Calling the renderButtons function to display the initial list of movies
      renderButtons();


})