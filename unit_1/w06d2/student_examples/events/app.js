console.log('app.js');


const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];

const populateData = () => {
    for (person of data){
        // console.log(person);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(person.name);
        const $addressDiv = $('<div>').addClass('address').text(person.address);
        $infoContainer.append($nameDiv);
        $infoContainer.append($addressDiv);
        $('body').append($infoContainer);
    }
}

const addData = (name, address) => {
    data.push({name: name, address: address});
    $('body').empty();
    populateData();
}

const removeData = (name) => {
    for (let i = 0; i < data.length; i++){
        if (name === data[i].name){
            data.splice(i, 1);
        }
        $('body').empty();
        populateData();
    }
}
// const removeData = (name) => {
//     const dataIndex = data.map((el) => {
//         el.name
//     }).indexOf(name);
//     data.splice(dataIndex, 1)
//     $('body').empty();
//     populateData();
// }

$(() => {
    // populateData();
    // addData('Madeline', "philadelphia");
    // removeData('Jem')

    const $button = $('#btn');

    const addText = () => {
        $('body').append('It seems as if it has been clicked');
    }

    const changeClass = () => {
        $('body').toggleClass('black');
    }

    $button.on('click', populateData);
    // $button.on('click', changeClass);
    // $button.on('click', addText);
    // vanilla js :
    // $btn.addEventListener();


});