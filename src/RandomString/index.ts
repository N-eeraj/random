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
}
