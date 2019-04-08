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

  function makeImage(obj){
      
    return `
      
        <img src="${obj.images.fixed_height.url}" />
        <p>Rating: ${obj.rating}</p>

    `
    
  }


  $(document).on('click', '.role', function() {
    var time = $(this).text();
    console.log(time);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + time +"&api_key=5w2DMI6qhLMH2Py6K94gID9JOICPnvaW&limit=10";
    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    $('#images').prepend(response.data.map(makeImage))
      console.log(response.data);
    });
      });
      renderButtons();
})