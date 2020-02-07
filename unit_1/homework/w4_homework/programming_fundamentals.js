/////////////////////////////////////////
// Section 1: Programming Fundamentals //
/////////////////////////////////////////

// DRY -- Don't Repeat Yourself allows for cleaner code
// KISS- Simplicity is more effecient and easier to modify
// Avoid creating a YAGNI - dont add extra functionality until the progarm calls for it
// Do the simplest thing that could possibly work- This allows you to stay on path towards success
// Don't make me think- code should be easily read and understood
// Write code for the maintainer - code so that the person who is maintaining the program can work efficently
// Single responsibility principle - a function should do one thing well
// Avoid premature optimization- dont think about optimization untill the code works
// Separation of concerns- each piece of the code should be separate and not overlapping

const f = l => {                       // function f with paramater l
    let es = 0, p = 0, c = 1, n = 0    // in this function we have variables
    while (c <= l) {                   // while c is less than the argument do something
      n = c + p;                       // n is going to equal c + p
      [c, p] = [n, c]                  // no clue what this is saying
      es += (c % 2 === 0) ? c : 0      // then es increments by c if c is even otherwise es is 0
    }
    return es                          // then when the the loop ends return es
  }
  

// checkEvenSum
// f2
// yes it is

