console.log('app.js loaded for palette picker');

<<<<<<< HEAD
$(()=> {
    const $colorPalette = $('#color-palette');
    const $myPalette = $('#my-palette');
    const $generate = $('#generate');

    const addColor = (event) => {
        console.log($(event.currentTarget).css('background-color'));

        const $color = $(event.currentTarget).css('background-color');

        const $mySquare = $('<div>').addClass('square').css('background-color', $color);
        
        $myPalette.append($mySquare);
    };

    const makePalette = () => {
        $colorPalette.empty();
        for (let i = 0; i < 150; i++){
            const $square = $('<div>');
            $square.addClass('square');

            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            let randomColor = `rgb(${red}, ${green}, ${blue})`;

            $square.css('background-color', randomColor);
            $square.on('click', addColor);

            $colorPalette.append($square);
            
        }
    };



    $generate.on('click', makePalette);

});
=======
$(() => {
	const $colorPalette = $('#color-palette');
	const $myPalette = $('#my-palette');
	const $generate = $('#generate');

	const addColor = (event) => {
		let color = $(event.currentTarget).css('background-color');

		const $square = $('<div>');
		$square.addClass('square');
		$square.css('background-color', color);

		$myPalette.append($square);
	};

	const makePalette = () => {
		$colorPalette.empty();
		for (let i = 0; i < 150; i++) {
			const $square = $('<div>');
			$square.addClass('square');

			const red = Math.floor(Math.random() * 255);
			const green = Math.floor(Math.random() * 255);
			const blue = Math.floor(Math.random() * 255);
			const randomColor = `rgb(${red}, ${green}, ${blue})`;

			$square.css('background-color', randomColor);
			$square.on('click', addColor);

			$colorPalette.append($square);
		}
	};

	$generate.on('click', makePalette);
});
>>>>>>> c5e2f3acccbce6ba7391e97327c9f097f159580f
