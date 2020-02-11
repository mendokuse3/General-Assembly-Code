def validCard(num)

	rnum = num.to_s.reverse.split('')

	(1..rnum.length - 1).step(2) do |n|
		rnum[n] = rnum[n].to_i * 2
	end

	sum_of_digits = rnum.join.split('').map(&:to_i).reduce(:+)
	sum_of_digits % 10 === 0

end

puts validCard(1234567890123456)


