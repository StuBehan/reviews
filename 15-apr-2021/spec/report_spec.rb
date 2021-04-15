require 'report'

describe Report do
  describe 'generate_report' do
    it 'takes a string of csvs and returns a string with the count of each of the values' do
      expect(subject.generate_report('Green')).to eq('Green: 1')
    end

    it 'takes a string with odd cased letters and returns the results' do
      expect(subject.generate_report('grEEn')).to eq('Green: 1')
    end

    it 'takes the csv with all possible correct student results' do
      expect(subject.generate_report('Green, Red, Amber')).to eq('Green: 1\nAmber: 1\nRed: 2')
    end
  end
end