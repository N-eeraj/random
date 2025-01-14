import {
  test,
  expect,
} from "vitest"
import {
  randomUUID,
  randomUUIDArray,
} from "."

const ITERATIONS = 1_000
const LENGTH = 100

test(`Return an uuid`, () => {
  const set = new Set()
  for (let i = 0; i < ITERATIONS; i++) {
    const value = randomUUID()
    expect(set.has(value)).toBeFalsy
    set.add(value)
  }
})

test(`Return an uuid array of length ${LENGTH}`, () => {
  const set = new Set()
  for (let i = 0; i < ITERATIONS; i++) {
    const values = randomUUIDArray({ length: LENGTH })
    expect(values.length).toBe(LENGTH)
    values.forEach(value => {
      expect(set.has(value)).toBeFalsy
      set.add(value)
    })
  }
})

// error cases

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => randomUUIDArray({ length: "10" })).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => randomUUIDArray({ length: -5 })).toThrow()
})
