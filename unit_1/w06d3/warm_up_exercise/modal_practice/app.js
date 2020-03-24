// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$( () => {
  //write your code here
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  const openModal = () => {
    // $modal.css('display', 'block');
    $modal.show();
  }

  const closeModal = () => {
    // $modal.css('display', 'none');
    $modal.hide();
  }

  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);

  setTimeout(openModal, 5000);

});
