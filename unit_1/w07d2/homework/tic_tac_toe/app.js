$(() => {
    const $container = $('#container')
    // const $squares = $('.square');

    const generateBoard = () => {
        for (let i = 0; i < 9; i++){
            const $square = $('<div>').addClass('square');
            $square.on('click', changeSquare);
            $container.append($square);
        }
    }
    
    const changeSquare = event => {
        // $(event.currentTarget).css('background', 'grey');
        // give each square a div
        // give each div text "x"
        const ths = $(event.currentTarget);
        const marker = $('<div>').addClass('marker').text('x');
        ths.append(marker);


    }

    generateBoard();
})