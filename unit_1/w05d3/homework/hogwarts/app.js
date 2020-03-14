$(() => {
    const $container = $('#container');
    console.log($container);
    const $h1 = $('<h1>').text("Hogwarts");
    // the h1 does not appear because it has not been appended
    $container.append($h1);












});
