import RandomNumber from "../RandomNumber"
import {
  checkIsOfType,
  checkMinValue,
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
}
