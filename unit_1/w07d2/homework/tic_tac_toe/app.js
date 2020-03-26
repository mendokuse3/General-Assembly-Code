$(() => {
    // const $squares = $('.square');
    const $container = $('#container')

    const generateBoard = () => {
        for (let i = 0; i < 9; i++){
            const $square = $('<div>').addClass('square');
            $container.append($square);
        }
    }
    
    const changeSquare = event => {
        // $(event.currentTarget).css('background', 'grey');

    }

    // $squares.on('click', changeSquare)
    generateBoard();
})