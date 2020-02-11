console.log('shape clicker js file is connected');

//remember to set up your window onload!
$(() => {
	let shapes = [ 'triangle', 'circle', 'square', 'triangle-down', 'octagon', 'heart' ];

	let count = 0;

	const changeShape = (event) => {
		count < shapes.length - 1 ? count++ : (count = 0);

		$(event.currentTarget).removeClass().addClass(shapes[count]);
	};

	$('.row div').on('click', changeShape);
});
