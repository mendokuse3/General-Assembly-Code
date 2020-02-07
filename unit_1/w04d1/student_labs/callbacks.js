const func1 = (param1) => {
    param1();
};

const funcHi = () => {
    console.log("Hi");
};

// func1(funcHi);

// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi');

// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// // foo(bar, 'hi');

// const baz = (param) => {
//     console.log(param.toUpperCase());
// };

// foo(baz, 'hello')

// const electricMixer = (attachment) => {
//     console.log("This mixer is now: " + attachment());
// };

// electricMixer(() => {
//     return "spiralizing";
// });

// time = 0;
// setInterval(() => {
//     console.log(time);
//     time++
// }, 1);

const wordReverse = (forwardString) => {
    return forwardString.split(' ').reverse().join(' ');
};

const toUpperCase = (param1) => {
    return param1.toUpperCase();
};

const repMaster = (inputParam, funcParam) => {
    console.log(funcParam(inputParam) + " proves I am the rep MASTER!");
};

repMaster("Never give your heart to a blockhead", wordReverse);

repMaster("I finished this practice", toUpperCase);