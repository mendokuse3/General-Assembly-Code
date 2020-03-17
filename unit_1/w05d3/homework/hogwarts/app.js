$(() => {
    // year 1
    const $container = $('#container');
    console.log($container);
    const $h1 = $('<h1>').text("Hogwarts");
    // the h1 does not appear because it has not been appended
    $container.append($h1);

    // year 2
    $container.append($('<h2>').text("Leo"));
    $container.append($('<h3>').text("Ravenclaw"));
    const $pet = $('<h4>').text("Nikki");
    $pet.addClass('cat');
    $container.append($pet);
    const $wand = $("<h4>").text("i dunno... a wandy wand");
    $container.append($wand);

    // year 3
    $container.append($('<ul>').attr('storage', 'trunk'));
    const $beer = $('<li>').text('butter beer');
    $('ul').append($beer);
    $('ul').append($('<li class=\"secret\">').text('invisibility cloak'));
    $('ul').append($('<li class=\"secret\">').text('magic map'));
    $('ul').append($('<li class=\"secret\">').text('time turner'));
    $('ul').append($('<li class=\"cat\">').text('leash'));
    $('ul').append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));

    // year 4
    $container.append($('<h5>').text('Spring 2020'));
    $container.append($('<table>'));
    $('table').append($('<thead>'));
    $('thead').append($('<th>').text("Day"));
    $('thead').append($('<th>').text("Classes"));
    const $tr1 = $('<tr>');
    $('table').append($tr1);
    $('tr').append($('<td>').text('Monday'));
    $('tr').append($('<td>').text('Defence Against the Dark Arts'));
    const $othertr = $('<tr>');
    $('table').append($othertr);
    $othertr.append($('<td>').text("Tuesday"));
    $othertr.append($('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts'));
    const $othertr1 = $('<tr>');
    $('table').append($othertr1);
    $othertr1.append($('<td>').text("Wednesday"));
    $othertr1.append($('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts'));
    const $othertr2 = $('<tr>');
    $('table').append($othertr2);
    $othertr2.append($('<td>').text("Thursday"));
    $othertr2.append($('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts'));
    const $othertr3 = $('<tr>');
    $('table').append($othertr3);
    $othertr3.append($('<td>').text("Friday"));
    $othertr3.append($('<td>').text('Charms, Potions, Transfiguration, Defense Against the Dark Arts'));


    // year 5
    $wand.remove();
    $beer.remove();
    $pet.after($wand);
    $wand.text('a new wandy wand');
    $wand.css('color', 'indigo');
    $pet.remove();
    $('table').after($pet);
    $pet.remove();
    $wand.before($pet);


    // year 6
    $('ul').hide('slow').delay(2000).show('slow');
    $('li.cat').addClass('cabbage');
    $('.cabbage').removeClass('cabbage');
    

    // year 7
    $('h5').text("Fall 2020");
    $('ul').prepend($('<li>').text("Butter Beer"));
    $('ul').removeAttr('storage');    
    $('ul').attr('storage', 'chest');






});
