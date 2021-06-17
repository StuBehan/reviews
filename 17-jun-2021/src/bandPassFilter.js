const bandPassFilter = (soundwave, lowpass = 40, highpass = 1000) => {
  if (!Array.isArray(soundwave)) {
    throw 'soundwaves are not parsed correctly'
  }

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