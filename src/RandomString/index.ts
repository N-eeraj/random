import { randomBoolean } from ".."
import RandomNumber from "../RandomNumber"
import {
  checkMinValue,
  checkIsOfType,
} from "../utils/argsValidations"

export default class RandomString {
  static upperCase(strLen = 1): string {
    return String.fromCharCode(...RandomNumber.intArray({ min: 65, max: 90, length: strLen }))
  }

  static lowerCase(strLen = 1): string {
    return String.fromCharCode(...RandomNumber.intArray({ min: 97, max: 122, length: strLen }))
  }

  static letters(strLen = 1): string {
    checkIsOfType("strLen", "number", strLen)
    checkMinValue("strLen", strLen, 0)

    let letters = ""
    while (letters.length !== strLen) {
      letters += String.fromCharCode(RandomNumber.int(randomBoolean() ? { min: 65, max: 90 } : { min: 97, max: 122 }))
    }

    return letters
  }

  static alphaNum(strLen = 1): string {
    checkIsOfType("strLen", "number", strLen)
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
    checkIsOfType("from", "string", from)
    checkIsOfType("strLen", "number", strLen)
    checkMinValue("strLen", strLen, 0)
    checkIsOfType("options", "object", options)

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

    try {
      checkMinValue("source string", source.length, 1)
    } catch {
      throw new Error(`Empty source string: pass a valid "from" of at least length 1 or enable any of the "options" (lower, upper, number) as true`)
    }
  
    while (str.length !== strLen) {
      str += source[RandomNumber.int({
        min: 0,
        max: source.length - 1,
        skipWarning: true,
      })]
    }

    return str
  }
}
