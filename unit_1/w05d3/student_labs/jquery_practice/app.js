$(() => {
    const $div1 = $('<div>').attr('id', 'top-container');
    const $div2 = $('<div>').attr('id', 'bottom-container');
    $('body').append($div1);
    $('body').append($div2);

    const $h1 = $('<h1>').text('Trois couleurs: rouge, blanc, et blue');
    $div1.append($h1);
    $div1.append($('<div>').addClass('couleur red'));
    $div1.append($('<div>').addClass('couleur white'));
    $div1.append($('<div>').addClass('couleur blue'));

    const $hOne = $('<h1>').text("Lumpy Space Princess");
    $div2.append($hOne);
    $div2.append($('<div>').attr('id', 'img-container'));
    $div2.append($('<img>').attr('src', 'https://i.imgur.com/1868Y8l.png'));

    $h1.text('Three colors: red, white, and blue');

    $('.white').css('background-color', 'black');
    $('.blue').css('background-color', 'orange');
    $h1.text("Three Colors: red, black, and orange");

    $('body').append($div1);
    $('img').attr('src', 'https://i.imgur.com/cxZb2XG.png');
    $hOne.text("The Ice King")

    $div1.remove();
    $div2.remove();
    $('body').append($('<p>').text("the ice king waz here"));
})