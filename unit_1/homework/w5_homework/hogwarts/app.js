$(() => {
    const $container = $('#container');
    
    const $h1 = $('<h1>').text('Hogwarts');
    
    $('body').append($h1);

    const $h2 = $('<h2>').text('Michael DiChello');
    const $h3 = $('<h3>').text('Hufflepuff');
    const $petName = $('<h4>').addClass('owl').text('Owl Pacino');
    const $wand = $('<h4>').text('Hornbeam Wand with Dragon Heartstring Core');

    $('body').append($h2);
    $('body').append($h3);
    $('body').append($petName);
    $('body').append($wand);

    const $trunk = $('<ul>').attr("storage", "trunk");
    const $butterBeer = $('<li>').text('butter beer');
    const $invisibilityCloak = $("<li>").addClass('secret').text('invisibility cloak');
    const $timeTurner = $('<li>').text('time turner').addClass('secret')
    const $leash = $('<li>').addClass('owl').text('leash');
    const $bertie = $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans');


    $('body').append($trunk);

    $($trunk).append($butterBeer)
    $($trunk).append($invisibilityCloak)
    $($trunk).append($timeTurner);
    $($trunk).append($leash);
    $($trunk).append($bertie);
    
    const $h5 = $('<h5>').text('Spring 2017');
    const $thDay = $('<th>').text('Day');
    const $thClass = $('<th>').text('Classes');
    const $row1 = $('<tr>');
    const $row2 = $('<tr>');
    const $row3 = $('<tr>');
    const $row4 = $('<tr>');
    const $row5 = $('<tr>');
    const $monday = $('<td>').text('Monday');
    const $class1 = $('<td>').text('Herbology');
    const $tuesday = $('<td>').text('Tuesday');
    const $class2 = $('<td>').text('Charms');
    const $wednesday = $('<td>').text('Wednesday');
    const $class3 = $('<td>').text('Potions');
    const $thursday = $('<td>').text('Thursday');
    const $class4 = $('<td>').text('Transfiguration');
    const $friday = $('<td>').text('Friday');
    const $class5 = $('<td>').text('Defense Against the Dark Arts');

       
    $('body').append($h5);
    $('body').append('<table>');
    $('table').append('<thead>');
    $('thead').append($thDay).append($thClass);
    $('table').append($row1);
    $('table').append($row2);
    $('table').append($row3);
    $('table').append($row4);
    $('table').append($row5);
    $($row1).append($monday);
    $($row1).append($class1);
    $($row2).append($tuesday);
    $($row2).append($class2);
    $($row3).append($wednesday);
    $($row3).append($class3);
    $($row4).append($thursday);
    $($row4).append($class4);
    $($row5).append($friday);
    $($row5).append($class5);

    $wand.remove();

    



});