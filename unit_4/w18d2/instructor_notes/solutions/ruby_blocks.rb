# For Ecah
# ['one', 'two', 'three'].each do |str|
#     puts 'the value is ' + str
# end

# ['one', 'two', 'three'].each { |str| puts 'the value is '+ str}


# Map

# times_two = [1,2,3].map do |num|
#     num * 2
# end

# p times_two

# p [1,2,3].map {|num| num * 2}



# Each
# def each(arr, &blk) #&blk must always be the last parameter
# 	for elem in arr
# 		blk.call(elem)
# 	end
# end

# each 0...5 do |currentNum|
# 	puts currentNum
# end


#proc

# log = Proc.new do |el|
#     puts el
# end

# log.call(5)


# callbacks in Ruby
# foo = Proc.new do
#     puts 'hi'
# end

# def bar(callback)
#     callback.call()
# end

# bar(foo)