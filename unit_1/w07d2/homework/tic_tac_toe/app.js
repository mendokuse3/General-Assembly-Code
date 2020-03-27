$(() => {
    const $container = $('#container')
    // const $squares = $('.square');
    const $mark = $('.marker');
    let counter = true;
    // let markerArray = [];
    let placeholderArray = [];

    const generateBoard = () => {
        for (let i = 0; i < 9; i++){
            const $square = $('<div>').addClass('square');
            $square.on('click', changeSquare);
            $square.attr('id', `${i}`);
            placeholderArray.push($(`#${i}`))
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
            // markerArray.push(marker);
            // $.merge(markerArray, marker)
            placeholderArray[ths.attr('id')] = marker.text();
            checkWin();
            counter = !counter;
        } else if (!counter){
            marker.text('o');
            // markerArray.push(marker);
            // $.merge(markerArray, marker)
            placeholderArray[ths.attr('id')] = marker.text();
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
        const $squares = $('.square');
        // if($mark.eq(0).text() === $mark.eq(1).text() === $mark.eq(2).text()){
        //     console.log('gameover');
        // }
        // console.log($mark)
        // console.log(markerArray[0].text());
        // markerArray.forEach(x => console.log(x.text()));
        console.log(placeholderArray);
        if (placeholderArray[0] === placeholderArray[1] && placeholderArray[1] === placeholderArray[2]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[0]} wins`);
        } else if (placeholderArray[3] === placeholderArray[4] && placeholderArray[4] === placeholderArray[5]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[3]} wins`);
        } else if (placeholderArray[6] === placeholderArray[7] && placeholderArray[7] === placeholderArray[8]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[6]} wins`);
        } else if (placeholderArray[0] === placeholderArray[3] && placeholderArray[3] === placeholderArray[6]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[0]} wins`);
        } else if (placeholderArray[1] === placeholderArray[4] && placeholderArray[4] === placeholderArray[7]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[1]} wins`);
        } else if (placeholderArray[2] === placeholderArray[5] && placeholderArray[5] === placeholderArray[8]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[2]} wins`);
        }
        else if (placeholderArray[0] === placeholderArray[4] && placeholderArray[4] === placeholderArray[8]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[0]} wins`);
        }
        else if (placeholderArray[2] === placeholderArray[4] && placeholderArray[4] === placeholderArray[6]){
            $squares.off('click', changeSquare);
            console.log(`${placeholderArray[2]} wins`);
        }
    }
    

    
    

    generateBoard();
})