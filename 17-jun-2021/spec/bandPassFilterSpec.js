describe('bandPassFilter', () => {
  it('takes an array arguement and returns an array of frequencies', () => {
    expect(bandPassFilter([500])).toEqual([500])
  })
})