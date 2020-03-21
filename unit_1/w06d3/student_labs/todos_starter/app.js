// #container #input-container #input-box #submit #lists #to-do-list
// #completed .to-do-item .done-item 


const addToDo = () => {
    const $toDoItem = $('<div>').addClass('to-do-item');
    $toDoItem.text($('#input-box').val());
    $toDoItem.append($('<button>').attr('id', 'complete-btn').text("Completed"));
    $('#to-do-list').append($toDoItem);
    completeToDO();
}
const completeToDO = () => {
    $('#complete-btn').on('click', (event) => {
        let $doneItem = $('.to-do-item').removeClass();
        $doneItem.addClass('done-item');
        $('.done-item').appendTo('#completed');
    })
}


$(() => {
    $('form').on('submit', (event) => {
        addToDo();
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
    })

})