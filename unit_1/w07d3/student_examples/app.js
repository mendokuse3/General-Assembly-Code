// $.ajax({
<<<<<<< HEAD
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data) => {
//         console.log(data);
//     },
//     error: () => {
//         console.log('bad request');
//     }
// });
$(() => {
    $('form').on('submit', (event) =>{
        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url: `http://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`
        }).then(
            (data)=> {
                console.log(data);
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            () => {
                console.log('bad request');
            }
        );
    });
});
=======
// 	url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
// 	success: (data) => {
// 		console.log(data);
// 	},
// 	error: () => {
// 		console.log('bad request');
// 	}
// });

$(() => {
	$('form').on('submit', (event) => {
		event.preventDefault();

		const userInput = $('input[type="text"]').val();

		$.ajax({
			url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
		}).then(
			(data) => {
				console.log(data);
				$('#title').html(data.Title);
				$('#year').html(data.Year);
				$('#rated').html(data.Rated);
			},
			() => {
				console.log('Bad request');
			}
		);
	});
});
>>>>>>> 092a78b4ff4c835af1ec9c9553d45855a934b836
