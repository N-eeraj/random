import {
  test,
  expect,
} from "vitest"
import RandomString from "."
import { LETTERS } from "./letters.test"

const ITERATIONS = 1_000
export const STRING_NUMBERS = Array.from({ length: 10 }).map((_, i) => String(i))
export const ALPHA_NUM = [...LETTERS, ...STRING_NUMBERS]
const LENGTH = 10

test(`Return an alphanumeric character`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.alphaNum()
    expect(ALPHA_NUM).toContain(value)
  }
})

test(`Return an alphanumeric string of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.alphaNum()
    value.split("")
      .forEach(char => expect(ALPHA_NUM).toContain(char))
  }
})

test(`Return an empty string`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.alphaNum({ strLen: 0 })
    expect(value).toBe("")
  }
})


// error cases

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => RandomString.alphaNum({ strLen: "10" })).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => RandomString.alphaNum({ strLen: -5 })).toThrow()
})

