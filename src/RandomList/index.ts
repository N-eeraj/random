import RandomNumber from "../RandomNumber"
import {
  checkIsOfType,
  checkMinValue,
  checkOptionalIsOfType,
} from "../utils/argsValidations"

export default class RandomList {
  static choice<ListItem>(list: Array<ListItem>): ListItem | null {
    // args validation
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
    // args validation
    checkIsOfType("list", "array", list)
    checkOptionalIsOfType("mixCount", "number", mixCount)

    try {
      checkMinValue("mixCount", mixCount, 1)
    } catch (error) {
      // handle un-shuffled 
      if (mixCount === 0) {
        console.warn("Warning: received mix count 0, returning un-shuffled list.")
        return list
      }
      throw error
    }

    // check and handle un-shuffled 
    try {
      checkMinValue("list length", list.length, 2)
    } catch {
      console.warn(`Warning: cannot shuffle list ${list}, list too small, returning un-shuffled list.`)
      return list
    }

    // handle default mix count
    if (!mixCount) {
      mixCount = Math.floor(list.length * Math.log2(list.length))
    }

    for (let i = 0; i < mixCount; i++) {
      const index1 = RandomNumber.int({ max: list.length - 1 })
      let index2 = index1
      while (index1 === index2) {
        index2 = RandomNumber.int({ max: list.length - 1 })
      }
      [list[index1], list[index2]] = [list[index2], list[index1]]
    }

    return list
  }
}
