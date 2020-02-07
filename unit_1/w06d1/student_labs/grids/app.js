$(() => {

const $redCube = $('<div>')
    .addClass('cube')
    .css('background-color', 'red');

const $blackCube = $('<div>')
    .addClass('cube')
    .css('background-color', 'black');

const createRow = () => {
    for (let i =0; i < 8; i++) {
        if (i % 2 === 0){
           $redCube.clone().appendTo($('body'));
        } else {
            $blackCube.clone().appendTo($('body'));
        }
    }

};

const rowReverse = () => {
    for (let i =0; i < 8; i++) {
        if (i % 2 === 0){
           $blackCube.clone().appendTo($('body'));
        }else {
            $redCube.clone().appendTo($('body'));
        }
    }

};

for (i = 0; i < 4; i++) {
    createRow();
    rowReverse();
};


});