describe('bandPassFilter', () => {
  it('takes an array arguement and returns an array of frequencies', () => {
    expect(bandPassFilter([500])).toEqual([500])
  })

  it('takes a freguency outside of the default lowpass, returns adjusted fq', () => {
    expect(bandPassFilter([30])).toEqual([40])
  })

  it('takes a freq outside of the default highpass, returns adjusted fq', () => {
    expect(bandPassFilter([1050])).toEqual([1000])
  })

  it('passes user specified high and low pass ranges and returns adjusted fq', () => {
    expect(bandPassFilter([30, 500, 900], 60, 800)).toEqual([60, 500, 800])
  })
})