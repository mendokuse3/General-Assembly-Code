const foo = () => {
<<<<<<< HEAD
    console.log("I'm the function 'foo'");
};

const awesome = () => {
    console.log("I'm the function 'awesome'");
};

const bar = (param1) => {
    console.log("executing callback");
    param1();
=======
	console.log("I'm the function foo");
};

const awesome = () => {
	console.log('I am the function awesome');
};

const bar = (param1) => {
	console.log('executing callback');
	param1(); // foo();
	// console.log(param1);
>>>>>>> 59102cf0925311b726cb3b0b028602b3db2c566f
};

bar(foo);
bar(awesome);

<<<<<<< HEAD


=======
// foo();
// console.log(foo);
>>>>>>> 59102cf0925311b726cb3b0b028602b3db2c566f
