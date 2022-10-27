/**
 * This program creates a airplane class.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-27
 */

class Airplane {
  private speed = 0

  // setter method for speed
  setSpeed(speed: number): void {
    this.speed = speed
  }

  // getter method for speed
  getSpeed(): number {
    return this.speed
  }
}

// export class for the main to use its methods
export = Airplane
