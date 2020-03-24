$(() => {
  
const list = [];

const render = () => {
    console.log("list: ", list);
    $('ul').empty();
    list.forEach((item) => {
        $('ul').append($(`<li> ${item} </li>`));
    });
    $('li').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through');
    });
}

    $('form').on('submit', (event) => {
        let input = $('#input-box').val();
        list.push(input);
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
        render();
    });

  

});

