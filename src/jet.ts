/**
 * This program creates a jet class.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-27
 */

import Airplane from './airplane'

class Jet extends Airplane {
  private readonly MULTIPLIER = 2

  // setter method for speed
  setSpeed(speed: number): void {
    super.setSpeed(speed * this.MULTIPLIER)
  }

  // getter method for acceleration
  acceleration(): void {
    super.setSpeed(super.getSpeed() * this.MULTIPLIER)
  }
}

// export class for the main to use its methods
export = Jet
