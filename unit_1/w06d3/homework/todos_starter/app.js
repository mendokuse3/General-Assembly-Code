// #container #input-container #input-box #submit #lists #to-do-list
// #completed .to-do-item .done-item 


const addToDo = () => {
    const $toDoItem = $('<div>').addClass('to-do-item');
    $toDoItem.text($('#input-box').val());
    $toDoItem.append($('<button>').addClass('complete-btn').text("Completed"));
    $('#to-do-list').append($toDoItem);
}
const completeToDO = () => {
    $('.complete-btn').on('click', (event) => {
        let $doneItem = $(event.currentTarget).parent().removeClass();
        $doneItem.addClass('done-item');
        $(event.currentTarget).text('REMOVE');
        $(event.currentTarget).attr('id', 'delete-me');
        removeToDo();
        $($doneItem).appendTo('#completed');
    })
}

const removeToDo = () => {
    $('#delete-me').on('click', (event2) => {
        $(event2.currentTarget).parent().remove();
    })
}


$(() => {
    $('form').on('submit', (event) => {
        addToDo();
        completeToDO();
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
    })

})