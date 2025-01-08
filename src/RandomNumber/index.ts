import {
  checkMinValue,
  checkIsNumeric,
} from "../utils/argsValidations"

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

interface IntArrayArgs extends IntArgs {
  length?: number
}

export default class RandomNumber {
  static float({ min, max, precision }: FloatArgs = {}) {
    // args validation
    checkIsNumeric("min", min)
    checkIsNumeric("max", max)
    checkIsNumeric("precision", precision)
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

    if (precision !== undefined) {
      value = Number(value.toFixed(precision))
    }

    return value
  }

  static int({ min, max }: IntArgs = {}) {
    // args validation
    checkIsNumeric("min", min)
    checkIsNumeric("max", max)

    return this.float({
      min: (min || Math.ceil(max ?? 100) > 0) ? Math.floor(min ?? 0) : Math.ceil(max ?? 100) - 100,
      max: Math.ceil(max ?? 100),
      precision: 0,
    })
  }

  static floatArray({ min, max, precision, length }: FloatArrayArgs = {}) {
    // args validation
    checkIsNumeric("min", min)
    checkIsNumeric("max", max)
    checkIsNumeric("precision", precision)
    checkIsNumeric("length", length)
    checkMinValue("length", length, 0)

    return Array.from({ length: length ?? 1 })
      .map(() => this.float({ min, max, precision }))
  }

  static intArray({ min, max, length }: IntArrayArgs = {}) {
    // args validation
    checkIsNumeric("min", min)
    checkIsNumeric("max", max)
    checkIsNumeric("length", length)
    checkMinValue("length", length, 0)

    return Array.from({ length: length ?? 1 })
      .map(() => this.int({
        min: min ? Math.floor(min) : Math.ceil(max ?? 100) - 100,
        max: Math.ceil(max ?? 100),
      }))
  }
}
