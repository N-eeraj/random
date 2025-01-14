import {
  test,
  expect,
} from "vitest"
import RandomString from "./index"
import { LOWER_CASE } from "./lowerCase.test"
import { UPPER_CASE } from "./upperCase.test"

const ITERATIONS = 1_000
export const LETTERS = [...LOWER_CASE, ...UPPER_CASE]
const LENGTH = 10

test(`Return a letter in from a-z or A-Z`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.letters()
    expect(LETTERS).toContain(value)
  }
})

test(`Return a string of length ${LENGTH} in from a-z or A-Z`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.letters()
    value.split("")
      .forEach(letter => expect(LETTERS).toContain(letter))
  }
})

test(`Return an empty string`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.letters({ strLen: 0 })
    expect(value).toBe("")
  }
})


// error cases

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => RandomString.letters({ strLen: "10" })).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => RandomString.letters({ strLen: -5 })).toThrow()
})

