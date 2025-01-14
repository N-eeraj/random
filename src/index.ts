import {
  checkMinValue,
  checkIsOfType,
} from "./utils/argsValidations"

export function randomBoolean(): boolean {
  return Math.random() > 0.5
}

export function randomBooleanArray(length = 1): boolean[] {
  checkIsOfType("length", "number", length)
  checkMinValue("length", length, 0)

  const array = []

  for (let index = 0; index < length; index++) {
    array.push(randomBoolean())
  }

  return array
}

export function randomUUID(): string {
  return crypto.randomUUID()
}

export function randomUUIDArray(length = 1): string[] {
  checkIsOfType("length", "number", length)
  checkMinValue("length", length, 0)

  const array = []

  for (let index = 0; index < length; index++) {
    array.push(randomUUID())
  }

  return array
}
