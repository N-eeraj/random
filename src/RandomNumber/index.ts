interface IntArgs {
  max?: number
  min?: number
}

interface FloatArgs extends IntArgs {
  precision?: number
}

interface FloatArrayArgs extends FloatArgs {
  length?: number
}

export default class RandomNumber {
  static float({ min, max, precision }: FloatArgs = {}) {
    // args validation
    if (min !== undefined && typeof min !== "number") {
      throw new Error(`min must be a number, received ${min} of type ${typeof min}`)
    }
    if (max !== undefined && typeof max !== "number") {
      throw new Error(`max must be a number, received ${max} of type ${typeof max}`)
    }
    if (min !== undefined && max !== undefined && min >= max) {
      throw new Error(`min should be lesser than max, received min: ${min} & max: ${max}`)
    }
    if (precision !== undefined && typeof precision !== "number") {
      throw new Error(`precision should be a number, received ${precision} of type ${typeof precision}`)
    }

    let value = Math.random()
    if (max !== undefined || (min !== undefined && min < 0)) {
      value *= ((max ?? 1) - (min ?? 0))
    }
    if (min === undefined && max !== undefined && max < 0) {
      value += max
    }
    value += (min ?? 0)

    if (precision !== undefined) {
      value = Number(value.toFixed(precision))
    }

    return value
  }

  static int({ min, max }: IntArgs = {}) {
    // args validation
    if (min !== undefined && typeof min !== "number") {
      throw new Error(`min must be a number, received ${min} of type ${typeof min}`)
    }
    if (max !== undefined && typeof max !== "number") {
      throw new Error(`max must be a number, received ${max} of type ${typeof max}`)
    }

    return this.float({
      min: (min || Math.ceil(max ?? 100) > 0) ? Math.floor(min ?? 0) : Math.ceil(max ?? 100) - 100,
      max: Math.ceil(max ?? 100),
      precision: 0,
    })
  }

  static floatArray({ min, max, precision, length }: FloatArrayArgs = {}) {
    // args validation
    if (min !== undefined && typeof min !== "number") {
      throw new Error(`min must be a number, received ${min} of type ${typeof min}`)
    }
    if (max !== undefined && typeof max !== "number") {
      throw new Error(`max must be a number, received ${max} of type ${typeof max}`)
    }
    if (min !== undefined && max !== undefined && min >= max) {
      throw new Error(`min should be lesser than max, received min: ${min} & max: ${max}`)
    }
    if (precision !== undefined && typeof precision !== "number") {
      throw new Error(`precision should be a number, received ${precision} of type ${typeof precision}`)
    }
    if (length !== undefined && typeof length !== "number") {
      throw new Error(`length should be a number, received ${length} of type ${typeof length}`)
    }

    return Array.from({ length: length ?? 1 })
      .map(() => this.float({ min, max, precision }))
  }
}
