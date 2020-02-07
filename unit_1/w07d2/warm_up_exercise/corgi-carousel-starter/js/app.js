console.log('corgi carousel connected to app.js!');

<<<<<<< HEAD
$(()=> {
    let currentImgIndex = 0;
    const highestIndex =  $('.carousel-images').children().length -1;

    const hide = () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    };

    const show = () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
    };

    $('.next').on('click', () => {

        hide();

        if (currentImgIndex < highestIndex) {
            currentImgIndex++;
        } else {
            currentImgIndex = 0;
        };
       
        show();
    });

    $('.previous').on('click', () => {

        hide();

        if (currentImgIndex > 0) {
            currentImgIndex--;
        } else {
            currentImgIndex = highestIndex;
        };       

        show();
    });
});
=======
$(() => {
	let currentImgIndex = 0;
	const highestIndex = $('.carousel-images').children().length - 1;

	$('.next').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

		if (currentImgIndex < highestIndex) {
			currentImgIndex++;
		} else {
			currentImgIndex = 0;
		}

		$('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
	});

	$('.previous').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

		if (currentImgIndex > 0) {
			currentImgIndex--;
		} else {
			currentImgIndex = highestIndex;
		}

		$('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
	});
});
>>>>>>> 46fd6299d88e15a63270a4f8c8599849262d66ae
