import {
  vi,
  test,
  expect,
} from "vitest"
import RandomList from "."

const NUMERIC_ARRAY = [1, 2, 3, 4]
const MULTI_TYPE_ARRAY = [1, "abc", 300, [123, "xyz", { abc: 123 }]]
const SINGLE_ITEM = "HELLO WORLD!"

const ITERATIONS = 1_000

test(`Return shuffled list from ${NUMERIC_ARRAY}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomList.shuffle(NUMERIC_ARRAY)
    expect(NUMERIC_ARRAY.every((element) => values.includes(element))).toBeTruthy()
    values.forEach((value) => expect(value).toBeTypeOf("number"))
  }
})

test(`Return shuffled list from ${MULTI_TYPE_ARRAY}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomList.shuffle(MULTI_TYPE_ARRAY)
    expect(MULTI_TYPE_ARRAY.every((element) => values.includes(element))).toBeTruthy()
    values.forEach((value) => {
      expect(MULTI_TYPE_ARRAY.map(element => typeof element)).toContain(typeof value)
    })
  }
})


// error cases

test("Throw error if list is not provided", () => {
  // @ts-ignore
  expect(() => RandomList.shuffle()).toThrow()
})

test("Throw error for non array list", () => {
  // @ts-ignore
  expect(() => RandomList.shuffle("stringOption")).toThrow()
})

test("Throw error for non numeric mix count", () => {
  // @ts-ignore
  expect(() => RandomList.shuffle(NUMERIC_ARRAY, "invalidCount")).toThrow()
})

test("Throw error for negative mix count", () => {
  expect(() => RandomList.shuffle(NUMERIC_ARRAY, -5)).toThrow()
})

test("Throw error for infinite length value", () => {
  expect(() => RandomList.shuffle(NUMERIC_ARRAY, Infinity)).toThrow()
})
