<<<<<<< HEAD

$(()=> {

    const changeColor = (event) => {
        $(event.target).addClass('pink');
    }

    const generateSketchPad = (num) => {
        for (let i = 0; i < num; i++) {
            let $div = $('<div>').addClass('square');
            $('#my-squares').append($div);
        };
    }

    $('#inputButton').on('click', () => {
        let numOfCubes = $('#inputBox').val();
        $('div').remove();
        console.log(numOfCubes);
        generateSketchPad(numOfCubes);
        $('div').on('mouseover', changeColor);
    });

    
});
=======
$(() => {
	const changeColor = (event) => {
		console.log(event);
		$(event.target).addClass('pink');
	};

	for (let i = 0; i < 1000; i++) {
		let $div = $('<div>');
		$div.addClass('square');
		$('body').append($div);
	}

	$('div').on('mouseover', changeColor);
});
>>>>>>> 46fd6299d88e15a63270a4f8c8599849262d66ae
