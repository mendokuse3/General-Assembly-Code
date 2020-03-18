const randColorRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}



const generateSquares = (numberOfSquares) => {
    for (let i = 0; i < numberOfSquares; i++){
        const $square = $('<div>').addClass('square');
        $square.css('background-color', randColorRGB());
        $square.text(i)
        $('body').append($square);
    }
}

// jquery onload function
$(() => {
    generateSquares(1000);

})