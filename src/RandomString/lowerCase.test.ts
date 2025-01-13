import {
  test,
  expect,
} from "vitest"
import RandomString from "./index"

const ITERATIONS = 1_000
export const LOWER_CASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const LENGTH = 10

test(`Returns a letter in lower case from a-z`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.lowerCase()
    expect(LOWER_CASE).toContain(value)
  }
})

test(`Returns a string of length ${LENGTH} in lower case from a-z`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.lowerCase()
    value.split("")
      .forEach(letter => expect(LOWER_CASE).toContain(letter))
  }
})

test(`Returns an empty string`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.lowerCase({ strLen: 0 })
    expect(value).toBe("")
  }
})


// error cases

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => RandomString.lowerCase({ strLen: "10" })).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => RandomString.lowerCase({ strLen: -5 })).toThrow()
})
