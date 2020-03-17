if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};

const $div = $('<div>');
console.log($div);

$(() => {

  $div.addClass('meat');  
  
  const $h3 = $('<h3>').text('Ostrich');
  $div.append($h3);

  $('body').append($div);

  const $div2 = $('<div>').addClass('fruit');
  const $h2 = $('<h3>').text('Fruits');
  $('body').append($div2.append($h2));


  const $divs = $('div');

  console.log($divs);

  // $divs.hide('slow');

  const $meat = $('.meat');
  // $meat.hide();

  const $img = $('<img>');
  $img.attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');

  $('body').prepend($img);


  // $divs[2].children();
  console.log($divs.eq(2).children());
  $divs.eq(2).children().text('kohlrabi');
  
  const $newh3 = $('<h3>').text('cheese');
  $divs.eq(1).empty();
  $divs.eq(1).append($newh3);

});