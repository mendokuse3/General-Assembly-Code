// #container #input-container #input-box #submit #lists #to-do-list
// #completed .to-do-item .done-item 


const addToDo = () => {
    const $toDoItem = $('<div>').addClass('to-do-item');
    $toDoItem.text($('#input-box').val());
    $toDoItem.append($('<button>').addClass('complete-btn').text("Completed"));
    $('#to-do-list').append($toDoItem);
    completeToDO();
}
const completeToDO = () => {
    $('.complete-btn').on('click', (event) => {
        let $doneItem = $(event.currentTarget).parent().removeClass();
        $doneItem.addClass('done-item');
        $($doneItem).appendTo('#completed');
    })
}


$(() => {
    $('form').on('submit', (event) => {
        addToDo();
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
    })

})