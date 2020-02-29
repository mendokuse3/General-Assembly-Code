// const foo = {
//     someArray: [1, 2, 3],
//     someObject: {
//         someProperty: "ahs;dlfjasdf"
//     },
//     someMethod: () => {
//         console.log("ohhello");
//     }
// }

// // console.log(foo.someObject.someProperty);
// foo.someMethod();

// const fooArray = [
//     {someProperty: 'wee'}, 2, 3,
//     () => {
//         console.log('fun');
//     }
// ]
// console.log(fooArray[0]);


const foo2DArray = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
]
// console.log(foo2DArray[1][2]);

// fooArray[3]();

// for (let i = 0; i < foo.someArray.length; i++){
//     console.log(foo.someArray[i]);
// }

// // iterate over items
// for (let element of foo.someArray){
//     console.log(element);
// }

// // iterate over keys in an object
// for (let element in foo.someArray){
//     // gves index position
//     console.log(element);    
// }

// for (let i = 0; i < foo2DArray.length; i++){
//     for (let j = 0; j < foo2DArray[i].length; j++){
//         console.log(foo2DArray[i][j])
//     }
// }

// for (let row of foo2DArray){
//     for (let element of row)
//     console.log(element);    
// }

// const fooFunction = () => {
//     return {
//         someProperty: 'howdy'
//     }
// }

// console.log(fooFunction().someProperty)

// const fooFunction = () => {
//     return [
//         'apple',
//         'banana',
//         'pear'
//     ]
// }
// console.log(
//     fooFunction()[1]
// );

// const fooFunction = () => {
//     return {
//         someArray: [
//             'fun',
//             'awesome',
//             'sweet'
//         ]
//     }
// }
// console.log(
//     fooFunction().someArray[1]
// );

// const fooFunction = () => {
//     return {
//         someMethod: () => {
//             console.log("oh hai")
//         }
//     }
// }

// fooFunction().someMethod()


// const fooFunction = () => {
//     return () => {
//         console.log('whaaa?')
//     }
// }
// fooFunction()()

const foo = {
    someMethod: () => {
        return {
            someProperty: "some value",
            someArray: [
                'peach',
                'apple',
                'pear'
            ],
            someObject: {
                someProperty: 'some Value'
            },
            someMethod: () => {
                console.log("both methods can have same name")
            }
        }
    }
}
// console.log(foo.someMethod().someProperty);
// console.log(
//     foo.someMethod().someArray[2]
// );
// console.log(foo.someMethod().someMethod()())

const fooArray2 = [
    1,
    'apple',
    () => {
        return {
            someProperty: 'some value',
            someArray: [
                'cat',
                'dog',
                'baboon'
            ],
            someObject: {
                someProperty: "some value"
            },
            someMethod: () => {
                return () => {
                    console.log('paerljaskejase;rkas;efkkjasfe')
                }
            }
        }
    }
]

// console.log(fooArray2[2]().someProperty)
// console.log(fooArray2[2]().someArray[2])
// console.log(fooArray2[2]().someObject.someProperty)
// console.log(fooArray2[2]().someMethod())
fooArray2[2]().someMethod()()