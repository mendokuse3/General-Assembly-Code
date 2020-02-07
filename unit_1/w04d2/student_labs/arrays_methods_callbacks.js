<<<<<<< HEAD
const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];

const updatedIceCreams = iceCreams.map((flavor) => {
    return flavor + " ice cream";
});

// console.log(updatedIceCreams);
=======
const iceCreams = [ 'Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road' ];

const updatedIceCreams = iceCreams.map((flavor) => {
	return flavor + ' ice cream';
});

// console.log(iceCreams, updatedIceCreams);
>>>>>>> 886366b367796d3461eeef0357085ee2b12d0928

const originalArray = [ 2, 4, 6, 8, 10 ];

const newArray = originalArray.map((num) => {
<<<<<<< HEAD
    return num * 2;
});

// console.log(newArray);

const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];

const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

// Alphabetize strings (names, subjects, values)
const sortClassArray = classArray.sort();

console.log(sortClassArray);


// const sortNumberArray = numberArray.sort();


// sorting values (least to greatest, greatest to least)

const sortNumberArray = numberArray.sort((a,b) => {
    return a - b;
});

console.log(sortNumberArray);

=======
	return num * 2;
});

console.log(newArray);

// h1 in index.html

let insta = ['post', 'post2', 'post3'];

let newItems = insta.map((item) => {
    return `<div>${item}</div>`
})

document.querySelector('body').append(newItems);
>>>>>>> 886366b367796d3461eeef0357085ee2b12d0928
