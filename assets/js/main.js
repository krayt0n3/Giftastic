$( window ).on( "load", function() {
//get buttons on page
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
// and push out more

  function makeImage(obj){

    return `
      <div class = animated>
      <img src="${obj.images.fixed_height_still.url}" data-alternate="${obj.images.fixed_height.url}" />
        <p>Rating: ${obj.rating}</p>
    </div>
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

    $('img').on('click', function() {
      var still = $(this).attr('src', $(this));
      var animated = $(this).attr('src', $(this).attr('data-alternate'));
      if(still) {
      $(this).attr('src', $(this).attr('data-alternate'))
      } else if (animated) {
        $(this).attr('src', $(this));
      }
    })
    
      console.log(response.data);
    });

    
      });



      renderButtons();
});