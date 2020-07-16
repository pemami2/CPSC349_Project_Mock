$(document).ready(function(){
    $(".searchTerm").val('');       // Clear Search Feild When Loaded/Reloaded
    
    $(".searchTerm").on('input', function(){
        if($(this).val()) {
            var request = new XMLHttpRequest();

            request.open('GET', 'https://api.rawg.io/api/games?search=[search]&page_size=5'.replace('[search]', $(this).val()));    // API call to get games

            request.onload = () => {
                $('#ddElements').empty();   // Clear Drop-Down List

                var data = JSON.parse(request.response);
                
                // Create Drop-Down Elements
                data.results.forEach(game => {
                    $('#ddElements').append('<div id="search-result">' + '<img class="result-image" src="[image]">'.replace('[image]', game.background_image) + '<a class="result-name">' + game.name + '</a>' + '</div>');
                    // console.log(game.name);
                });
                // console.log('\n')
            }
            request.send();
        }
        else {
            $('#ddElements').empty(); // Clear Drop-Down List
        }
    });
});

