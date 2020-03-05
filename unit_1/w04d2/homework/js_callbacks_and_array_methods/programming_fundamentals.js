// Write a ~1 sentence summary for each one
// DRY 
    // Avoid repetitive code by making new abstractions.
// KISS
    // Make your code as simple as possible.
// Avoid creating a YAGNI
    // Don't add functionality until you need it
// Do the simplest thing that could possibly work
    // Keep things simple
// Don't make me think
    // The code you write should be simple to understand by another person
// Write code for the maintainer
    // Write code so that in the future, for maintenance, it is clear and understandable
// Single responsibility principle
    // Each component should perform one task
// Avoid premature optimization
    // Don't optimize your code unless you're done and it runs slower than desired
// Separation of concerns
    // Keep your css, html, and javascript separate

// Which ones surprise you (if any)?
    // The YAGNI surprises me.  I would expect that if you predict the need for a piece of functionality it would be good practice to premptively create it.

// Which one is currently giving you the most struggle?
    // I definitely struggle with multiple, such as being DRY, keeping code simple and of single responsibility.


// Commenting code

const f = l => {
    // declaring variables
    let es = 0, p = 0, c = 1, n = 0
    // setting condition while current is less than or equal to limit
    while (c <= l) {
        // setting next to equal the sum of current and previous
      n = c + p;
        // setting current to equal next and setting previous to equal current
      [c, p] = [n, c]
    //   adding current to evenSum if current is divisible by 2
      es += (c % 2 === 0) ? c : 0
    }
    return es
}
  
console.log(f(55))
  
// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
    // A more semantic name would be sumOfEvenFibonacci

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
    // f2 would be easier and preferred to work with as it is understandable

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
    // the semi-colon is necessary







