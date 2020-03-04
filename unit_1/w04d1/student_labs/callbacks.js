// // // const number1 = (phrase) => {
// // //     phrase();
// // // } 
// // // const number2 = () => {
// // //     console.log("hi");
// // // }
// // // number1(number2);

// // // const foo = (param, param2) => {
// // //     param(param2);
// // // }

// // // const bar = (param) => {
// // //     console.log(param);
// // // }

// // // foo(bar, 'hi');

// // const foo = (param, param2) => {
// //     param(param2, 'hello');
// // }

// // const bar = (param, param2) => {
// //     console.log(param2);
// // }
// // const baz = (param) => {
// //     console.log(param.toUpperCase());
// // }

// // // foo(bar, 'hi');
// // foo(baz, 'hello')


// // // ELECTRIC MIXER
// // const electricMixer = attachment => {
// //     console.log("This mixer is now: " + attachment());
// // }
// // const spiralizer = () => {
// //     return "spiralizing";
// // }
// // const slicerDicer = () => {
// //     return "slicin' and dicin'";
// // }

  
// // // electricMixer(() => {
// // //     return "spiralizing";
// // // })

// // electricMixer(spiralizer);
// // electricMixer(slicerDicer);

// // const wordReverse = str => {
// //   return str.split(' ').reverse().join(' ');
// // }

// // console.log(wordReverse('hello my name is'));

// // const toUpperCase = str => {
// //   return str.toUpperCase();
// // }
// // console.log(toUpperCase('hello'));

// // const repMaster = (input, func) => {
// //   return func(input) + ' proves that I am the rep MASTER';
// // }

// // console.log(repMaster("hello my name is", toUpperCase))



// // const count = arr => {
// //   const duplicates = [];
// //   // iterate through array
// //   arr.sort();
// //   for (let i = 0; i < arr.length; i++){
// //     // find if element is the same
// //     if (arr[i] ===)
// //     // push to duplicate array
// //   }
// //   // return duplicates.length
// // }


// // METHODS LAB
// const person = {
//   jump: () => {
//       console.log('fly!');
//   }
// };
// person.jump();
// const generateCar = ()=>{
//   return {
//       drive(){
//           console.log("Vroom");
//       }
//   }
// }
// generateCar().drive();

// const account = {
//   tweet: () => {
//       return {
//           message: "fun"
//       }
//   }
// }
// console.log(account.tweet().message);
// const me = {
//   foo: () =>{
//       return {
//           array: [2.5, 7, true]
//       }
//   }
// }
// console.log(me.foo().array[1]);

// const baz = {
//   foo: () => {
//     return {
//       matt: {
//         travel: "boat"
//       }
//     }
//   }
// }
// console.log(baz.foo().matt.travel);

// const factory = {
//   createCar: () => {
//     return {
//       startEngine: () => {
//         return "hi";
//       }
//     }
//   }
// }
// factory.createCar().startEngine();

// const matt = {
//   blink: () =>{
//       return ()=>{
//           console.log('hi')
//       }
//   }
// }
// matt.blink()();

// const list = [
//   'dogs',
//   false,
//   3.5,
//   ()=>{
//       return {
//           funStuff: ()=>{
//               console.log('yaaassss');
//           }
//       }
//   }
// ];
// list[3]().funStuff();

// const foo = [
//   'asdfasdf',
//   'matt',
//   false,
//   6,
//   ()=>{
//       return ()=>{
//           console.log('yes!');
//       }
//   },
//   {
//       dog:'blue'
//   }
// ];
// foo[4]()()

// HUNGRY FOR MORE
// const foo = {
//   someMethod: (callback)=>{
//       console.log('About to invoke the callback');
//       callback();
//   }
// }

// const myFunc = ()=>{
//   console.log('I have been called!');
// }


// foo.someMethod(myFunc);

// const foo = {
//   height:5,
//   someMethod: (callback)=>{
//       callback();
//   }
// }

// const myFunc = (param)=>{
//   console.log(param.height);
// }

// myFunc(foo)

// const shirtColor = {
//   color: ['red', 'blue', 'green', 'white', 'pink'],
// }

// const combineColor = arr => {
//   return arr.join(", ");
// }

// console.log(combineColor(shirtColor.color))


// MORE
// const obj = {
//   method: () => {
//     return "heillo"
//   }
// }
// console.log(obj.method());

// const func = () => {
//   return {
//     obj: {
//       meth: () => {
//         console.log('hi')
//       }
//     }
//   }
// }
// func().obj.meth()

const obj = {
  meth: () => {
    return {
      obj: {
        isgreen: true
      }
    }
  }
}
console.log(obj.meth().obj.isgreen);

const obj4 = {
  meth: () => {
    return {
      obj: {
        arr: [1, 2, 3]
      }
    }
  }
}
console.log(obj4.meth().obj.arr[2]);

const obj5 = {
  meth: () => {
    return {
      obj: {
        obj: {
          isOn: false
        }
      }
    }
  }
}

console.log(obj5.meth().obj.obj.isOn);

const obj6 = {
  meth: () => {
    return {
      obj: {
        meth: () => {
          console.log('ewew')
        }
      }
    }
  }
}

obj6.meth().obj.meth()

const funkee = () => {
  console.log("funkeee")
}

const obj7 = {
  meth: () => {
      funkee();
  }
}

obj7.meth()

const funcky = () => {
  return {
    obj: {
      meth: () => {
        console.log("ive bee ncalleed")
      }
    }
  }
}
const arr8 = [
  funcky,
  "ehhlo",
  2343
]

arr8[0]().obj.meth()


const bar = {
  someMethod: (meth)=> {
      meth();
  }
}

const foo = {
  someMethod(){
      console.log('this method was called');
  }
}

foo.someMethod()
// console.log(bar.someMethod(foo))

