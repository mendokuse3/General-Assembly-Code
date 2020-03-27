$(() => {
    const $container = $('#container')
    const $squares = $('.square');
    const $mark = $('.marker');
    let counter = true;
    let array = [];

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
        if (counter){
            marker.text('x');
            array.push(marker);
            // $.merge(array, marker)
            checkWin();
            counter = !counter;
        } else if (!counter){
            marker.text('o');
            array.push(marker);
            // $.merge(array, marker)
            checkWin();
            counter = !counter;
        }
        ths.append(marker);
        // this makes the clicked square unclickable by removing the event handler
        ths.off();
        // console.log($('.marker').eq(0).text());

    }


// for win condition logic, in order to display x or o has won teh game
// use the counter: if counter is true, x has won/ if counter is false o has won

    // for column win
        // x + 3

    // for diagonal win
        // x + 4
    // for row win
        // 1-3, 4-6,
    const checkWin = () => {
        // if($mark.eq(0).text() === $mark.eq(1).text() === $mark.eq(2).text()){
        //     console.log('gameover');
        // }
        // console.log($mark)
        // console.log(array[0].text());
        array.forEach(x => console.log(x.text()));
    }
    

    
    

    generateBoard();
})