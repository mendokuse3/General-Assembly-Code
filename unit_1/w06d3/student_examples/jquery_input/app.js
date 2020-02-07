$(() => {

const list = [];

const render = () => {
    console.log('list: ', list);
    
    $('ul').append(`<li>${list[list.length - 1]}</li>`);
    $('li').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through');
    });
};


$('form').on('submit', (event) => {
    console.log( $('#input-box').val() );

    list.push( $('#input-box').val() );

    event.preventDefault();
    $(event.currentTarget).trigger('reset');
    
    render();
});



});

