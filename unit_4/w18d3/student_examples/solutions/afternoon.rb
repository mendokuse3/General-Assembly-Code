# Create Muppets

class Muppet 
    
    def initialize name
        colors = ['red','green']
        @name = name
        @color = colors[0]
        p "This muppet is called " + :name 
    end
end

my_muppet = Muppet.new "Madeline"

p my_muppet