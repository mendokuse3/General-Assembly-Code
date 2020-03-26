$(() => {
    const $container = $('#container')
    // const $squares = $('.square');
    let counter = 1;

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
        const marker = $('<div>').addClass('marker');
        // x or o logic
            // set a counter = 0; 
            // if statement
                // if counter % 2 === 0 then marker.text(x)
                // counter ++
            // else if
                // if counter % 2 !== 0 then marker.text(o)
                // counter ++
        if (counter % 2 === 0){
            marker.text('x');
            counter ++;
        } else if (counter % 2 !== 0){
            marker.text('o');
            counter ++;
        }
        ths.append(marker);


    }

    generateBoard();
})