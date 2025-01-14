import {
  test,
  expect,
} from "vitest"
import {
  randomBoolean,
  randomBooleanArray,
} from "./index"

const ITERATIONS = 1_000
const LENGTH = 100

test(`Return a boolean value`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    expect(randomBoolean()).toBeTypeOf("boolean")
  }
})

test(`Return a boolean array of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = randomBooleanArray({ length: LENGTH })
    values.forEach(value => expect(value).toBeTypeOf("boolean"))
    expect(values.length).toBe(LENGTH)
  }
})

// error cases

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => randomBooleanArray({ length: "10" })).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => randomBooleanArray({ length: -5 })).toThrow()
})
