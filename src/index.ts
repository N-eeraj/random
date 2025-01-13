import {
  checkMinValue,
  checkIsNumeric,
} from "./utils/argsValidations"

export function randomBoolean(): boolean {
  return Math.random() > 0.5
}

export function randomBooleanArray({ length } = { length: 1 }): boolean[] {
  checkIsNumeric("length", length)
  checkMinValue("length", length, 0)

  const array = []

  for (let index = 0; index < length; index++) {
    array.push(randomBoolean())
  }

  return array
}
