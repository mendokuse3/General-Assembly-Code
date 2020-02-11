console.log('Hello World');

$(() => {
	$('body').append('<div id="top-container"></div>');
	$('body').append('<div id="bottom-container"></div>');

	$('#top-container').append(`
       <h1>Trois couleurs: rouge, blanc, et blue</h1>
       <div class="couleur red"></div>
       <div class="couleur ivory"></div>
       <div class="couleur blue"></div>
    `);

	$('#bottom-container').append(`
       <h1>Lumpy Space Princess</h1>
        <div id="img-container">
            <img src="https://cdn.dribbble.com/users/1037538/screenshots/3916239/lsp.png">
        </div>
    `);

	$('#top-container h1').text('Three colors: red, white and blue');
	$('.ivory').css('background-color', 'black');
	$('.blue').css('background-color', 'orange');
	$('#top-container h1').text('Three colors: red, black and orange');

	// BONUS
	// $('body').append($('#top-container'));
	// $('#img-container img').attr('src', 'https://i.imgur.com/Pr8ya4L.png');
	// $('#bottom-container h1').text('The ice king');
	// $('#top-container, #bottom-container').remove();
	// $('body').append('<p>The ice king waz here');
});
