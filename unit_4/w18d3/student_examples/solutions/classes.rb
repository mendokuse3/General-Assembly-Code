p "Hello World".upcase

p "Hello World".class

# class String

#     def is_palindrome? word
#         word.upcase.reverse == word.upcase
#     end

# end

# p "Borsht".is_palindrome? "Borsht"


# class String

#     def is_palindrome? 
#         self.upcase.reverse == self.upcase
#     end

# end
    
# p "Borsht".is_palindrome?


class World 

    # attr_reader :shape
    # attr_writer :shape
    attr_accessor :name, :shape

    def initialize name, shape="oblate spheroid"
        @name = name
        @people = []
    end

    # def name
    #     @name
    # end

    def people
        @people
    end

    # def name=value
    #     @name = value
    # end

    def populate
        @people << { name: "Shrimpy", age: 20 }
    end
end

# world1 = World.new

# p world1
# p world1.name
# p world1.class

# world1.name = "Tatooine"
# p world1.name

# p world1.people

# world1.populate
# world1.populate
# world1.populate

# p world1.people

# world1 = World.new "Panthelassa"
# world2 = World.new "Tatooine"
# world3 = World.new "Nothing But Shrimp"
# world4 = World.new "San Junipero"

# p world1.name
# p world2.name
# p world3.name
# p world4.name

world1 = World.new "Panthalassa"
# world2 = World.new "Tatooine" , "sphere"
world3 = World.new "Nothing But Shrimp" , "dome"
# world4 = World.new "San Junipero", "cylinder"

world1.shape = 'cube'

world3.name = 'The Good Place'
p world3.name


p world1.shape

planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)
# populate milky way with worlds from our planets array
milky_way = []

planets.each do |planet|
  world = World.new planet
  milky_way << world
end

p milky_way

class Mathy
    def self.formula_1 (a, b, c)
       a + b * c
     end
    def self.subtract_and_divide (a , b, c)
      (a - c ) / b
    end
  
    def self.powers_of_3 a
       `a * a * a / 3`
    end
  end

  p Mathy.formula_1(2, 3, 4)


  class Person
    attr_reader :name, :age, :favorite_color, :height
  
    def initialize(name:, age:, favorite_color:, height:)
      @name = name
      @age = age
      @favorite_color = favorite_color
      @height = height
    end
  end
  
  me = Person.new(name: 'David', age: 35, favorite_color: :blue, height: 68)
  me.favorite_color

  class Animal
    attr_reader :age
  
    def initialize
      @age = 0
    end
  
    def get_older
      @age = @age += 1
    end
  end
  
  class Cat < Animal
    def sound
      'meow'
    end
  end
  
  class Dog < Animal
    def sound
      'woof'
    end
  end
  
  jade = Cat.new
  jade.class #=> Cat
  Cat.superclass #=> Animal
  jade.age #=> 0
  p jade.get_older
  jade.sound #=> 'meow'
  jade.age #=> 1

  class Spider
    NUMBER_LEGS = 8
  
    def num_legs
      NUMBER_LEGS
    end
  end
  
  p Spider::NUMBER_LEGS #=> 8


  class Mathy
    def self.square(number)
        number * number
      end
  end
  
  p Mathy.square(2)

  mat = Mathy.new
  p mat.square(2)

  p Math.class