# Hello hello hello

# def hello number
#     for i in 0...number do
#         p i
#     end
# end

# hello(5)

# Personal Greeting
# def personal_greeting name
#     p "Why hello there " + name
# end

# personal_greeting("Madeline");

# Vowel Checker
# def has_vowel? word
#   word = word.split('')
#   vowels = ['a','e','i','o','u'];
#   for i in 0...word.length do
#     if vowels.include? word[i] then
#         return true
#     end
#   end
#   return false
# end

# p has_vowel?('mad')

# Roll Call
# students = %w[Mike Carol Alice Greg Marcia Peter Jan Bobby Cindy]
# def roll_call students
#     for student in 0...students.length do
#         p 'Welcome, ' + students[student]
#     end
# end

# roll_call(students)

# Hash Roll Call

# def hash_roll_call students
#     students_hash = []
#     for i in 0...students.length do
#         new_student = { :first_name => students[i]}
#         students_hash.push(new_student)
#     end
#     p students_hash[0][:first_name]
# end

# hash_roll_call(students)

# classy_students = []

# class Student
#     attr_accessor :name, :last

#     def initialize name, last
#        @name = name
#        @last = last
#     end
# end

# madeline = Student.new 'madeline', 'omoore'
# classy_students.push(madeline)
# nando = Student.new 'nando', 'mag'
# classy_students.push(nando)
# arthur = Student.new 'arthur', 'bern'
# classy_students.push(arthur)
# vincent = Student.new 'vincent', 'van gogh'
# classy_students.push(vincent)
# paul = Student.new 'paul', 'chapman'
# classy_students.push(paul)

# p classy_students


### Classy Roll Call

# def class_roll_call students
#     for i in 0...students.length 
#         p  students[i].name
#     end
# end

# class_roll_call(classy_students)

# Triangle of Hash
# def triangle_of_hash num
#     for i in 1...num 
#         str = ''
#         for x in 0...i
#             str += '#'
#         end
#         p str
#     end
# end

# triangle_of_hash(10)

# Upside Down Triangle of Hash

# def rev_triangle_of_hash num
#     for i in num.downto(0)
#         str = ''
#         for x in i.downto(0)
#             str += '#'
#          end
#          p str
#     end
# end

# rev_triangle_of_hash(6)

