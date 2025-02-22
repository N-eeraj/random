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

  static shuffle<ListItem>(list: Array<ListItem>, mixCount?: number): Array<ListItem> {
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

  static sample<ListItem>(list: Array<ListItem>, sampleSize: number): Array<ListItem> {
    // args validation
    checkIsOfType("list", "array", list)
    checkIsOfType("sampleSize", "number", sampleSize)

    // check if sample size is valid
    try {
      checkMinValue("sampleSize", sampleSize, 1)
    } catch(error) {
      if (sampleSize === 0) {
        console.warn("Warning: received sample size 0, returning empty list.")
        return []
      } else {
        throw error
      }
    }

    // check if list is of valid length
    try {
      checkMinValue("list length", list.length - 1, sampleSize)
    } catch {
      if (list.length === sampleSize) {
        console.warn("Warning: received sample size equal to list length, returning shuffled list.")
        return this.shuffle(list)
      } else {
        throw new Error(`Sample size should be less than list length, received sample size ${sampleSize} for list of length ${list.length}`)
      }
    }

    const sample = []

    while (sample.length < sampleSize) {
      const index = RandomNumber.int({ max: list.length - 1 })
      sample.push(list[index])
      sample.splice(index, 1)
    }

    return sample
  }
}
