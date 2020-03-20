const imageArray = [
    "https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    "https://images.unsplash.com/photo-1584464606181-9215a2633e0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    "https://images.unsplash.com/photo-1584464367415-2e7ff6482b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80",
    "https://images.unsplash.com/photo-1584465889413-324f86d30d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80",
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80"
]

const addRandomImage = () => {
    let num = Math.floor(Math.random() * 5);
    const $imageDiv = $('<div>').addClass('square');
    $imageDiv.append($('<img>').attr('src', imageArray[num]).addClass('image'));
    $('body').append($imageDiv);
    // allows each image to add a new image
    // $imageDiv.on('click', addRandomImage);
    //allows for each image to be removable
    $imageDiv.on('click', () => {
        $imageDiv.remove();
    })
}


$(() => {
    const $randoDiv = $('<div>').addClass('square').text("Add a random image");
    $('body').append($randoDiv);
    $randoDiv.on('click', addRandomImage);
    
})