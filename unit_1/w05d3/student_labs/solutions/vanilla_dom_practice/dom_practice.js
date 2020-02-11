// Get the element with the id you assigned and save it to a variable . Console.log that variable.
let list = document.getElementById('list');
console.log(list);

// Get the h2 element and save it to a variable h2. Console.log that variable.
let h2 = document.querySelector('h2');
console.log(h2);
h2.innerText = h2.innerText + '!!!';

// Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
let allHeadlines = document.querySelectorAll('.headline');
console.log(allHeadlines);

// Change the style/color of the text of your ONE of your li elements to your favorite html color
let allListItems = document.querySelectorAll('li');
allListItems[0].style.color = 'aqua';
//Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
allListItems[1].innerText = 'Jamboree sandwich at the Jambo-ree';

//Create an element and append it
let newEl = document.createElement('img');
newEl.setAttribute(
	'src',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTgpwMhlPM6JnwaT-KTZREISvXxZhhhyl4QrpEvXO4paqxKUC'
);
document.querySelector('body').appendChild(newEl);

// Remove an element:
let footer = document.querySelector('footer');
footer.remove();
