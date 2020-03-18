// this works but is not adding class
// const generateSquares = (numberOfSquares) => {
//     for (let i = 1; i <= numberOfSquares; i++){
//         const $square = $('<div>').addClass('square');
//         if (i % 2 === 0){
//             $square.css('background-color', 'black');
//         } else {
//             $square.css('background-color', 'red');
//         }
//         $('body').append($square);
//     }
// }
    // stuck here without using booleans
// const generateSquares = (numberOfSquares) => {
//     const $container = $('<div>').addClass('container');
//     $('body').append($container);
//     for (let i = 1; i <= numberOfSquares; i++){
//         const $square = $('<div>').addClass('square');
//         if (i % 2 === 0){
//             $square.addClass('black');
//         } else {
//             $square.addClass('red');
//         }
//         $container.append($square);
//     }
// }

// working answer
// const generateSquares = (numberOfSquares) => {
//     const $container = $('<div>').addClass('container');
//     $('body').append($container);
//     let colorSwitch = true;
//     let row = 0;
//     for (let i = 1; i <= numberOfSquares; i++){
//         const $square = $('<div>').addClass('square');
//         if (colorSwitch){
//             $square.addClass('red');
//             colorSwitch = false;
//         } else {
//             $square.addClass('black');
//             colorSwitch = true;
//         }
//         $container.append($square);
//         row++;
//         if(row % 8 === 0){
//             colorSwitch = !colorSwitch;
//         }
//     }
// }

$(() => {
    generateSquares(64);
})
