import { randomBoolean } from ".."
import RandomNumber from "../RandomNumber"
import {
  checkMinValue,
  checkIsNumeric,
} from "../utils/argsValidations"

export default class RandomString {
  static upperCase({ strLen } = { strLen: 1 }): string {
    return String.fromCharCode(...RandomNumber.intArray({ min: 65, max: 90, length: strLen }))
  }

  static lowerCase({ strLen } = { strLen: 1 }): string {
    return String.fromCharCode(...RandomNumber.intArray({ min: 97, max: 122, length: strLen }))
  }

  static letters({ strLen } = { strLen: 1 }): string {
    checkIsNumeric("strLen", strLen)
    checkMinValue("strLen", strLen, 0)

    let letters = ""
    while (letters.length !== strLen) {
      letters += String.fromCharCode(RandomNumber.int(randomBoolean() ? { min: 65, max: 90 } : { min: 97, max: 122 }))
    }

    return letters
  }

  static alphaNum({ strLen } = { strLen: 1 }): string {
    checkIsNumeric("strLen", strLen)
    checkMinValue("strLen", strLen, 0)

    let str = ""
    while (str.length !== strLen) {
      switch(RandomNumber.int({ max: 2 })) {
        case 0:
          str += RandomNumber.int({ max: 9 })
          continue
        case 1:
          str += String.fromCharCode(RandomNumber.int({ min: 65, max: 90 }))
          continue
        case 2:
          str += String.fromCharCode(RandomNumber.int({ min: 97, max: 122 }))
          continue
      }
    }

    return str
  }

  static from(from: string, strLen = from.length, options?: Partial<Record<"lower" | "upper" | "number", boolean>>): string {
    if (typeof from !== "string") {
      throw new Error(`from must be a string, received ${from} of type ${typeof from}`)
    }
    checkIsNumeric("strLen", strLen)
    checkMinValue("strLen", strLen, 0)
    if (options !== undefined && typeof options !== "object") {
      throw new Error(`options must be a object, received ${options} of type ${typeof options}`)
    }

    let str = ""
    let source = from

    if (options) {
      if (options.lower) {
        source += 'abcdefghijklmnopqrstuvwxyz'
      }
      if (options.upper) {
        source += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }
      if (options.number) {
        source += '0123456789'
      }
    }

    source = [...new Set(source)].join('')


    while (str.length !== strLen) {
      str += source[RandomNumber.int({ max: source.length - 1 })]
    }

    return str
  }
}
