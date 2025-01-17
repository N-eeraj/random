import RandomNumber from "../RandomNumber"
import {
  checkIsOfType,
  checkMinValue,
  checkOptionalIsOfType,
} from "../utils/argsValidations"

export default class RandomList {
  static choice<ListItem>(list: Array<ListItem>): ListItem | null {
    checkIsOfType("list", "array", list)

    try {
      checkMinValue("list length", list.length, 1)
    } catch {
      console.warn("Warning: given empty list, returning null.")
      return null
    }

    return list[RandomNumber.int({
      min: 0,
      max: list.length - 1,
    })]
  }

  static shuffle(list: unknown[], mixCount?: number) {
    checkIsOfType("list", "array", list)
    checkOptionalIsOfType("mixCount", "number", mixCount)

    try {
      checkMinValue("mixCount", mixCount, 1)
    } catch (error) {
      if (mixCount === 0) {
        console.warn("Warning: received mix count 0, returning un-shuffled list")
        return list
      }
      throw error
    }

    try {
      checkMinValue("list length", list.length, 1)
    } catch {
      console.warn("Warning: given empty list, returning null.")
      return []
    }

    return list
  }
}
