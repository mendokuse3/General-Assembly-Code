$(()=> {

for (let i = 0; i < 9; i++) {
    let $grid = $('<div>').addClass('square');
    $('#container').append($grid);
}

let $currentMove = 0
const moveArray = ['X', 'O'];
const $modal = $('#modal');
const $grid = ('.square')


const makeMove = (move) => {
    const turn = move;
    move < 1 ? $currentMove+= 1 : $currentMove = 0;
    return moveArray[turn];
};

// here is my attempt at a comparison to check if a row is all one symbol. IDK why they are returning undefined
const checkWin = () => {    
    const $alert =('<h1>')
    if($('.square').eq(0).attr('id') === $('.square').eq(1).attr('id')  === $('.square').eq(2).attr('id') ){
        $alert.text(`${$currentMove} WINS!`);
        $modal.append($alert);
        $modal.css('display', "block");
        console.log('x wins!');
    }
}




$($grid).on('click', (event)=> {
    if($(event.target).attr('id') === undefined) {
        $(event.target).attr('id', moveArray[$currentMove]);
        $(event.target).text(moveArray[$currentMove])
        checkWin();
        makeMove($currentMove)
        
    };
        
   
});

});