interface FloatArgs {
  max?: number
  min?: number
}

export default class RandomNumber {
  static float({ min = 0, max = 1 }: FloatArgs = {}) {
    let value = Math.random() * max
    if (value < min) {
      value += min
    }
    return value
  }  
}
