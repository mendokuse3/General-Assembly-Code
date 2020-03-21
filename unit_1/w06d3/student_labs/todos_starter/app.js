// #container #input-container #input-box #submit #lists #to-do-list
// #completed .to-do-item .done-item 


const addToDo = () => {
    const $toDoItem = $('<div>').addClass('to-do-item');
    $toDoItem.text($('#input-box').val());
    $('#to-do-list').append($toDoItem);
}

$(() => {
    $('form').on('submit', (event) => {
        addToDo();
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
    })

})