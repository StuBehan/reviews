const bandPassFilter = (soundwave, lowpass = 40, highpass = 1000) => {
  let lowPass = lowpass
  let highPass = highpass
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