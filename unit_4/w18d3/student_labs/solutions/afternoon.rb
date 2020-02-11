# class SomeClass
#     def say_hello 
#         p "hello world"
#     end 
# end 

# some_new_object = SomeClass.new
# some_new_object.say_hello()

# 1. Create  Muppets

class Muppet 
    
    def initialize name
        @name = name
        @color = ["red", "yellow", "green"].sample(1)
        p "This muppet is called #{@name} #{@color}"
    end 

    def honk 
        p "#{@name} is making a honking sound"
    end

    def flail 
        p "#{name} is flailing its arms!"
    end
end 

madeline_muppet = Muppet.new "Madeline"
# madeline_muppet.honk

# class Birds  

#     attr_accessor :name, :adjective

#     def  initialize name, adjective
#         @name = name
#         @adjective = adjective
#         @species =   ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler'].sample(1)
#         p "#{name} is a(n) #{adjective} bird!"
#         p @species
#     end

#     def hungry 
#         p "#{name} wants some regurgitated worms!"
#     end

#     def fly 
#         p "Flap! #{name} is taking flight!"
#     end
# end

# mad_bird = Birds.new "mad","cute"
# p mad_bird.name
# p mad_bird.adjective

# class Dessert 

#     def initialize name, sugar_content
#         @name = name
#         @sugar_content = sugar_content
#     end

#     def eat
#         p "Yum! this #{@name} is soooo delicious!"
#     end
# end

# class Pie < Dessert 

# end

# class DeepFriedDessert < Dessert 
#     def eat
#         p "Yum! This #{@name} is sooo...ack! ugh! *heart-attack*"
#     end
# end

# new_pie = Pie.new "pie","10"
# p new_pie.eat();

# new_des = DeepFriedDessert.new "oreo", "10"
# p new_des.eat()

# 4. The Universe

# class Universe

#     def initialize item1, item2, item3
#         @items = [item1, item2, item3]
#         @expanding = true
#         @conservation = true
#         @crunched = false
#     end

#     def see_all_things 
#         p @items
#     end

#     def create item
#         if @conservation == true 
#             @items[0] = item
#         else 
#             @items.push(item)
#         end
#     end

#     def check_density 
#         if @items.length > 10
#             @expanding = false
#         end
#     end

#     def energy_conservation
#         if @items.uniq! == nil 
#             @conservation = true
#         else 
#             @conservation  = false
#         end
#     end


# end

# mad_universe = Universe.new "cars", "cds", "mp3s"

# mad_universe.see_all_things()
# mad_universe.create('cars')
# mad_universe.see_all_things()


# parrallel = Universe.new "mp4s", "shoes", "dresses"

# parrallel.see_all_things()