import {
  test,
  expect,
} from "vitest"
import RandomString from "."

const ITERATIONS = 1_000
export const UPPER_CASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const LENGTH = 10

test(`Return a letter in upper case from A-Z`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.upperCase()
    expect(UPPER_CASE).toContain(value)
  }
})

test(`Return a string of length ${LENGTH} in upper case from A-Z`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.upperCase()
    value.split("")
      .forEach(letter => expect(UPPER_CASE).toContain(letter))
  }
})

test(`Return an empty string`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.upperCase({ strLen: 0 })
    expect(value).toBe("")
  }
})


// error cases

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => RandomString.upperCase({ strLen: "10" })).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => RandomString.upperCase({ strLen: -5 })).toThrow()
})
