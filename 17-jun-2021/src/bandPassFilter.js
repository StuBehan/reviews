const bandPassFilter = (soundwave) => {
  let lowPass = 40
  let highPass = 1000
  let adjustedSoundwave = []

  soundwave.forEach(freq => {
    if (freq < lowPass) {
      adjustedSoundwave.push(lowPass)
    } else if (freq > highPass) {
      adjustedSoundwave.push(highPass)
    } else {
      adjustedSoundwave.push(freq)
    }
  })

  return adjustedSoundwave
}