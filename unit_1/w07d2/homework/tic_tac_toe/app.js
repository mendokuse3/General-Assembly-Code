$(() => {
    const $squares = $('.square');
    
    $squares.on('click', (event) => {
        $(event.currentTarget).css('background', 'grey')
    })

})