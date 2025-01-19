import { randomBoolean } from ".."
import RandomList from "../RandomList"
import RandomNumber from "../RandomNumber"
import {
  checkIsOfType,
  checkMinValue,
  checkOptionalIsOfType,
} from "../utils/argsValidations"

export default class RandomString {
  static upperCase(strLen = 1): string {
    return String.fromCharCode(...RandomNumber.intArray({ min: 65, max: 90, length: strLen }))
  }

  static lowerCase(strLen = 1): string {
    return String.fromCharCode(...RandomNumber.intArray({ min: 97, max: 122, length: strLen }))
  }

  static letters(strLen = 1): string {
    checkOptionalIsOfType("strLen", "number", strLen)
    checkMinValue("strLen", strLen, 0)

    let letters = ""
    while (letters.length !== strLen) {
      letters += String.fromCharCode(RandomNumber.int(randomBoolean() ? { min: 65, max: 90 } : { min: 97, max: 122 }))
    }

    return letters
  }

  static alphaNum(strLen = 1): string {
    checkOptionalIsOfType("strLen", "number", strLen)
    checkMinValue("strLen", strLen, 0)

    let str = ""
    while (str.length !== strLen) {
      switch(RandomNumber.int({ max: 2 })) {
        // create integer character
        case 0:
          str += RandomNumber.int({ max: 9 })
          continue
        // create upper case character
        case 1:
          str += String.fromCharCode(RandomNumber.int({ min: 65, max: 90 }))
          continue
        // create lower case character
        case 2:
          str += String.fromCharCode(RandomNumber.int({ min: 97, max: 122 }))
          continue
      }
    }

    return str
  }

  static from(from: string, strLen = from.length, options?: Partial<Record<"lower" | "upper" | "number", boolean>>): string {
    checkOptionalIsOfType("from", "string", from)
    checkOptionalIsOfType("strLen", "number", strLen)
    checkMinValue("strLen", strLen, 0)
    checkOptionalIsOfType("options", "object", options)

    let str = ""
    let source = from

    // update source string based on options
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

  static shuffle(string: string, mixCount?: number): string {
    // args validation
    checkIsOfType("string", "string", string)
    checkOptionalIsOfType("mixCount", "number", mixCount)

    try {
      checkMinValue("mixCount", mixCount, 1)
    } catch (error) {
      // handle un-shuffled 
      if (mixCount === 0) {
        console.warn("Warning: received mix count 0, returning un-shuffled string.")
        return string
      }
      throw error
    }

    // check and handle un-shuffled 
    try {
      checkMinValue("string length", string.length, 2)
    } catch {
      console.warn(`Warning: cannot shuffle string ${string}, string too small, returning un-shuffled string.`)
      return string
    }

    return RandomList.shuffle(string.split(""), mixCount).join("")
  }
}
