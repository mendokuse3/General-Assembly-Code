console.log('app.js');

$(() => {
  $('.outside').on('click', (event) => {
      console.log(`outside target is: `, event.target);
      console.log(`outside current target is: `, event.currentTarget);
      $(event.currentTarget).css('background-color', 'black');
      return false;
  })

  $('.inside').on('click', (event) => {
    //   console.log("inside has been clicked");
    //   console.log(event);
    console.log(`inside target is: `, event.target);
    console.log(`inside current target is: `, event.currentTarget);
    event.stopPropagation();
    return false;
  })

  $('body').on('click', (event) => {
    //   console.log('body has been clicked');
    console.log(`body target is: `, event.target);
    console.log(`body current target is: `, event.currentTarget);
    return false;
  })
  
});