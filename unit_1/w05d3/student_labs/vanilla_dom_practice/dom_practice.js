const text = document.getElementById('sample');
console.log(text);

const h2 = document.querySelector('h2');
console.log(h2);
h2.innerText = h2.innerText + "!!!";
const foods = document.getElementsByClassName('consumable')
console.log(foods);
document.querySelectorAll('li')[0].style.color = "pink";
document.querySelectorAll('li')[3].innerText = "Jamboree sandwich at the Jambo-ree";

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80');
document.querySelector('h6').appendChild(newImg);

document.querySelector('ol').style.color = "blue"

const dead = document.querySelector('h6');
// dead.remove();



