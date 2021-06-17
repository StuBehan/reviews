# Review 17 JUN 2021

Digital audio workstation plugins.

filters

Band pass filter.

array of numbers / frequencies 

user can enter low and high frequencies for filtering

default lower 40hz and higher 1000hz

if values are not numbers, or not in an array:
error
'soundwaves are not parsed correctly'


|input | output |
|----|----|
| [30, 500, 1000, 1020] | [40, 500, 1000, 1000] |
