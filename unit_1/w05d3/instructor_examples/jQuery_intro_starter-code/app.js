$(() => {
if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};
  
const $div = $('<div>');
  
console.log($div);
$('body').append($div);
$div.addClass('meat');

const $h3 = $('<h3>');
$h3.text('Ostrich');
$div.append($h3);

const $food = $('<div>').addClass('fruit');
$('body').append($food);

const $foodName = $('<h3>').text('Orange');
$food.append($foodName);

const $divs = $('div');
// $divs.hide('slow');

const $meats = $('.meat');
// $meats.remove();

const $img = $('<img>');

$img.attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');

$('body').prepend($img);



});
