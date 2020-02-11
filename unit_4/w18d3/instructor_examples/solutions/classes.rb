p "Hello World".class


class String

    def is_palindrome? 
      self.upcase.reverse == self.upcase
    end
  
  end
  
  p "Borscht".is_palindrome?