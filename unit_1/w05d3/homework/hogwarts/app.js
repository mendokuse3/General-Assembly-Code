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
    $('ul').append($('<li>').text('butter beer'));
    $('ul').append($('<li class=\"secret\">').text('invisibility cloak'));
    $('ul').append($('<li class=\"secret\">').text('magic map'));
    $('ul').append($('<li class=\"secret\">').text('time turner'));
    $('ul').append($('<li class=\"cat\">').text('leash'));
    $('ul').append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));

    
    









});
