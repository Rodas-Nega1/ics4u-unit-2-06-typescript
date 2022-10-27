/**
 * This program retrieves and displays information based on classes.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-27
 */

import Airplane from './airplane'
import Jet from './jet'

const biplane = new Airplane()
biplane.setSpeed(212)
console.log(biplane.getSpeed())

const boeing = new Jet()
boeing.setSpeed(422)
console.log(boeing.getSpeed())
let loopCounter = 0

while (loopCounter < 4) {
  boeing.acceleration()
  console.log(boeing.getSpeed())

  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    boeing.acceleration()
  }
  loopCounter++
}

console.log(biplane.getSpeed())
console.log('\nDone.')
