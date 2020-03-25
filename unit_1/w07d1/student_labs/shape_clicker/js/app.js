console.log('shape clicker js file is connected');



// let count = 0;

//remember to set up your window onload!
$(() => {
    // thought i needed to make an array with all of these
    const $circle = $('.circle');
    const $square = $('.square');
    const $invTriangle = $('.invTriangle');
    const $octagon = $('.octagon');
    const $heart = $('.heart')
    
    const $triangle = $('.triangle');
    const array = [
        "circle", "square", "triangle-down", "octagon", "heart", "triangle"
    ]
    const array2 = [
        $circle, $square, $invTriangle, $octagon, $heart, $triangle
    ]
    let count = 0;

    const changeShape = (event) => {
        const obj = $(event.currentTarget);
        if (count < array.length) {
            obj.removeClass().addClass(array[count]);
            count ++;
        } else {
            count = 0;
            obj.removeClass().addClass(array[count]);
            count ++;
        }
    }
    $triangle.on('click', changeShape);
    // $triangle.on('mouseenter', (event) => {$(event.currentTarget).css('border-bottom-color', 'black')})
    // $triangle.on('mouseleave', (event) => {$(event.currentTarget).css('border-bottom-color', 'red')})
    // $(`.${array[count]}`).on('mouseenter', (event) => {$(event.currentTarget).css('border-bottom-color', 'black')})
    array2.map(function(item){
        item.on('mouseenter', (event) => {$(event.currentTarget).css('border-bottom-color', 'black')});
        item.on('mouseleave', (event) => {$(event.currentTarget).css('border-bottom-color', 'red')})
    })
})