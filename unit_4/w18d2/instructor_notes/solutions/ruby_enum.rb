# Select (like filter)
p [1,2,3,4,5].select { |i| i > 3 }

# Detect
p [1,2,3,4,5].detect { |i| i > 3 }

# Reject (like filter for false values)
p [1,2,3,4,5].reject { |i| i > 3 }

# Grep
p [1,3,5,10,15].grep (1..5)
p [0.3, "three", :three, "thirty-three"].grep /three/

p [1,3,5,10,15].grep (1..5) {|i| i * 3} 

# Sorting with Strings
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length}

# Sorting with Integers
p [2, 5, 1, 3].sort

# Sorting With Strings and Integers
p [2, "hello", 1, "what"].sort_by(&:to_i)
p [2, "hello", 1, "what"].sort_by(&:to_s) 

# Any
p %w(mew pikachu).any? { |word| word.length <= 3 }

# All
p %w(mew pikachu).all? { |word| word.length <= 3 }
p %w(mew cat her the).all? { |word| word.length <= 3 }

# Reduce
p (5..10).reduce(:+)
p (1..4).reduce(:*)
p [5, 6, 7].reduce(5, :+)