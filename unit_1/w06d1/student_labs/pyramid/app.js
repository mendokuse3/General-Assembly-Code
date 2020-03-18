const generatePyramid = (number) => {
    for (let i = 1; i <= number; i++){
        const $row = $('<div>').addClass('row');
        for (let j = 1; j <= i; j++){
            const $triangle = $('<div>').addClass('triangle');
            $triangle.css('border-left', `${50/number}vw solid transparent`);
            $triangle.css('border-right', `${50/number}vw solid transparent`);
            $triangle.css('border-bottom', `${100/number}vh solid red`);
            $row.append($triangle)
        }
        $('body').append($row);
    }
}

$(() => {
    generatePyramid(18);
    
})