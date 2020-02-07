const generateSquares = (numberOfSquares) => {
  for (let i = 1; i <= numberOfSquares; i++) {
    // this iterates through 1000
      const $square = $('<div>').addClass('square');
    //creates variable that is a div with class .square
      $square.css('background-color', randomColorRGB());
    //adds color using random color generator below
    $square.text(i);
    //prints the number in each div
    $square.attr('id', `square ${i}`);
    //adds the number as an id to each div
    $('body').append($square);
    //appends square it to body
  }
};

const randomColorRGB = () => {
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
    // random color generator that returns an RGB value for css
}


$(() => {
  // tells script to run post loading of content

  generateSquares(1000);


});