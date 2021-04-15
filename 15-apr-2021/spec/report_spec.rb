require 'report'

descsribe Report do
  describe 'generate_report' do
    it 'takes a string of csvs and returns a string with the count of each of the values' do
      expect(subject.generate_report('Green')).to eq('Green: 1')
    end
  end
end