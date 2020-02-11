let images = [
	'https://media1.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.webp',
	'https://media1.giphy.com/media/gL3k8mps6RUvWLxY7q/giphy.webp',
	'https://66.media.tumblr.com/ecac5dc3fdbfdd832ac28385b3dfbbbf/tumblr_nq3o6sMAyc1qiavcao1_400.gif',
	'https://66.media.tumblr.com/ca3444b72bf1a9b358814b2e5ee0b541/tumblr_nq3o6sMAyc1qiavcao2_540.gif',
	'https://media2.giphy.com/media/7AvBGMqnazHG0/giphy.gif?cid=790b7611cc636d6a8282e6ac9353748366eeb47d40b36614&rid=giphy.gif',
	'https://media2.giphy.com/media/mFwWtpKUaVt72/giphy.gif?cid=790b7611f5697aea05499c1fdef060c222960db10c88ea2a&rid=giphy.gif'
];

$(() => {
	$('body').append(`
         <div>
            <input type="text" placeholder="add new url">
            <button> Submit</button>
        </div>
        <div class="random image">Add Random Image</div>
    `);

	$('.random').on('click', function() {
		let random = Math.floor(Math.random() * images.length) + 0;

		// $(this).html(`
		//         <img src="${images[random]}">
		// `);

		$('body').append(`
		    <div class="image new--images">
		        <img src="${images[random]}">
		    </div>
		`);
	});

	// hungry for more
	// $('body').on('click', '.new--images', function() {
	// 	$(this).hide();
	// });

	// $('button').on('click', function() {
	// 	let newUrl = $('input').val();
	// 	images.push(newUrl);
	// 	$('input').val('');
	// });
});
