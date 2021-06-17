class Report 

  def generate_report(string)
    split_array = string.split(',')
    green_count = 0
    amber_count = 0
    red_count = 0
     p split_array
    split_array.each do |word|

      if word.strip.downcase == 'green'
        green_count += 1
      elsif word.strip.downcase == 'amber'
        amber_count += 1
      elsif word.strip.downcase == 'red'
        red_count += 1
      end
    end
    
    return "Green: #{green_count}\nAmber: #{amber_count}\nRed: #{red_count}"
  end
end