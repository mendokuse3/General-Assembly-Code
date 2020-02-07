$(() => {

const $topContainer = $('<div>').attr('id', 'top-container');
const $bottomContainer = $('<div>').attr('id', 'bottom-container');
const $h1 = $('<h1>')
const $rouge = $('<div>').attr('class', 'coleur').css('background-color', 'red');
const $blanc = $('<div>').attr('class', 'coleur').css('background-color', 'white');
const $blue = $('<div>').attr('class', 'coleur').css('background-color', 'blue');   

$('body').append($topContainer);
$('body').append($bottomContainer);

$topContainer.append($h1)
$h1.innerText('Trois Coleurs: rouge, blanc, et blue');  
$topContainer.append($rouge);
$topContainer.append($blanc);
$topContainer.append($blue);

$('.coleur').css('height', "200px");
$('.coleur').css('width', "200px");
$('.coleur').css("display", "inline-block");


})
