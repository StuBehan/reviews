describe('bandPassFilter', () => {
  it('takes an array arguement and returns an array of frequencies', () => {
    expect(bandPassFilter([500])).toEqual([500])
  })

  it('takes a freguency outside of the default bands and returns adjusted fq', () => {
    expect(bandPassFilter([30])).toEqual([40])
  })
})