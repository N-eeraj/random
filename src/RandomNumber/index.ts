import {
  checkMinValue,
  checkIsNumeric,
} from "../utils/argsValidations"

import type {
  MinMax,
  IntArgs,
  FloatArgs,
  IntArrayArgs,
  FloatArrayArgs,
} from "./types"



export default class RandomNumber {
  /* v8 ignore start */
  static #getIntMinMax({ min, max }: IntArgs): MinMax {
    // args validation
    checkIsNumeric("min", min)
    checkIsNumeric("max", max)

    const safeMin = (min || Math.ceil(max ?? 100) > 0) ? Math.floor(min ?? 0) : (Math.ceil(max ?? 100) - 100)
    const safeMax = (min && max === undefined) ? min + 100 : Math.ceil(max ?? 100)

    return {
      min: safeMin,
      max: safeMax,
    }
  }
  /* v8 ignore stop */

  static float({ min, max, precision }: FloatArgs = {}): number {
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

  static int({ min, max }: IntArgs = {}): number {
    const {
      min: safeMin,
      max: safeMax,
    } = this.#getIntMinMax({ min, max })

    return this.float({
      min: safeMin,
      max: safeMax,
      precision: 0,
    })
  }

  static floatArray({ min, max, precision, length }: FloatArrayArgs = {}): number[] {
    // args validation
    checkIsNumeric("length", length)
    checkMinValue("length", length, 0)

    return Array.from({ length: length ?? 1 })
      .map(() => this.float({ min, max, precision }))
  }

  static intArray({ min, max, length }: IntArrayArgs = {}): number[] {
    // args validation
    checkIsNumeric("length", length)
    checkMinValue("length", length, 0)

    const {
      min: safeMin,
      max: safeMax,
    } = this.#getIntMinMax({ min, max })

    return Array.from({ length: length ?? 1 })
      .map(() => this.int({
        min: safeMin,
        max: safeMax,
      }))
  }
}
