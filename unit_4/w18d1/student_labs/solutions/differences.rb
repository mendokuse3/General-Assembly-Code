### Get Name 

## Write a method that accepts a name from the user and then returns it. Here's the javascript: 

# ```
# const getName = () => {
#   let name = prompt("what is your name?");
#   return name;
# };
# ```

# def getName
#     puts "What is your name?"
#     name = gets.strip
#     return name
# end

# puts getName()



### Swap Em 

# Write a method that swaps the values of two variables around. Here's the javascript:

# const swapEm = () => {
#   let a = 10;
#   let b = 30;
#   let temp;

#   temp = b;
#   b = a;
#   a = temp;

#   console.log("a is now " + a + ", and b is now " + b);
# };


# def swapEm()
#     a = 10
#     b = 30
#     temp = nil

#     temp = b
#     b = a
#     a = temp

#     puts 'a is now ' + a.to_s + ', and b is now ' + b.to_s
# end

# swapEm()


### Reverse It 
# Write a method that reverses a string. Here's the javascript:

# const reverseIt = () => {
#   let string = "a man, a plan, a canal, frenemies!";
#   let reverse = "";
#   for (let i=0; i < string.length; i++) {
#     reverse += string[string.length - (i+1)];
#   };
#   console.log(reverse);
# };

# def reverseIt()
#     string = "A man, a plan, a canal, frenemies!"
#     reverse = ''
#     for i in 0...string.length do
#         reverse += string[string.length - (i +1)]
#     end
#     puts reverse
# end

# reverseIt()

# Multiply Array

# def multiply_array arr
#     return arr.reduce(:*)
# end

# p multiply_array([1,2,3])


# Fizz Buzz

# def fizz_buzzer x
#     if x%(3*5) === 0 
#         return 'fizzbuzz'
#      elsif  x%3 === 0 
#         return 'fizz'
#      elsif x%5 === 0 
#         return 'buzz'
#      else 
#         return 'archer'
#      end
# end

# p fizz_buzzer(7)

# Nth Fibonacci

# def nth_fibonacci_number 
#     fibs = [1,1]
#     p "which fib number do you want?"
#     num = gets.to_f
    
#     while fibs.length < num do
#         length = fibs.length
#         next_fib = fibs[length -2] + fibs[length -1]
#         fibs.push(next_fib)
#     end
   
#     p fibs[fibs.length - 1]
# end

# nth_fibonacci_number()

# Search Array

# def search_array arr, val
#     return arr.any? { |num| num === val }
# end

# p search_array([1,2],4)


# palindrome

# def is_palindrome str
#     for i in 0...str.length/2 do
#         if str[i] != str[str.length - i - 1]
#             return false
#             break
#         end
#     end
#     return true
# end

# p is_palindrome('abba')

# has_dupes

# def has_dupes arr
#     obj = {}

#     for i in 0...arr.length do
#         if obj[arr[i]]
#             return true
#         else 
#             obj[arr[i]] = true
#         end
#     end

#     return false
# end

# p has_dupes([1,2,1])