class Report 

  def generate_report(string)
    split_array = string.split(',')
    green_count = 0

    split_array.each do |word|
      if word == 'Green'
        green_count += 1
      end
    end
    
    return "Green: #{green_count}"
  end
end