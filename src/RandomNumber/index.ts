interface FloatArgs {
  max?: number
  min?: number
}

export default class RandomNumber {
  static float({ min, max }: FloatArgs = {}) {
    if (min !== undefined && typeof min !== "number") {
      throw new Error(`min must be a number received, ${min} of type ${typeof min}`)
    }
    if (max !== undefined && typeof max !== "number") {
      throw new Error(`max must be a number received, ${max} of type ${typeof max}`)
    }
    if (min !== undefined && max !== undefined && min >= max) {
      throw new Error(`min should be lesser than max, received min: ${min} & max: ${max}`)
    }

    let value = Math.random()
    if (max !== undefined || (min !== undefined && min < 0)) {
      value *= ((max ?? 1) - (min ?? 0))
    }
    if (min === undefined && max !== undefined && max < 0) {
      value += max
    }
    value += (min ?? 0)
    return value
  }  
}
