// #container #input-container #input-box #submit #lists #to-do-list
// #completed .to-do-item .done-item 
const todoList = [];
const completed = [];

const render = () => {
    todoList.forEach((thing) => {
        console.log(thing);
    })
}

$(() => {
    $('#submit').on('click', (event) => {
        let input = $('#input-box').val();
        todoList.push(input);
        $('#input-box').trigger('reset');
        render();
    })

})