const bandPassFilter = (soundwave) => {
  let lowPass = 40
  let adjustedSoundwave = []

  soundwave.forEach(freq => {
    if (freq < lowPass) {
      adjustedSoundwave.push(lowPass)
    } else {
      adjustedSoundwave.push(freq)
    }
  })

  return adjustedSoundwave
}