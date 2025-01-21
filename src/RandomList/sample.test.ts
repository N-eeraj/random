import {
  vi,
  test,
  expect,
} from "vitest"
import RandomList from "."

const NUMERIC_ARRAY = [1, 2, 3, 4]
const MULTI_TYPE_ARRAY = [1, "abc", 300, [123, "xyz", { abc: 123 }]]

const SAMPLE_SIZE = 3

const ITERATIONS = 1_000

test(`Return sample list from ${NUMERIC_ARRAY}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomList.sample(NUMERIC_ARRAY, SAMPLE_SIZE)
    expect(values.every((element) => NUMERIC_ARRAY.includes(element))).toBeTruthy()
    values.forEach((value) => expect(value).toBeTypeOf("number"))
  }
})

test(`Return sample list from ${MULTI_TYPE_ARRAY}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomList.sample(MULTI_TYPE_ARRAY, SAMPLE_SIZE)
    expect(values.every((element) => MULTI_TYPE_ARRAY.includes(element))).toBeTruthy()
    values.forEach((value) => {
      expect(MULTI_TYPE_ARRAY.map(element => typeof element)).toContain(typeof value)
    })
  }
})


// warning cases

test(`Return ${NUMERIC_ARRAY} array as it is with 0 sample size`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.sample(NUMERIC_ARRAY, 0)
  expect(values.length).toBe(0)
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received sample size 0, returning empty list.")
})

test(`Return ${NUMERIC_ARRAY} array as it is with same sample size as its length`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.sample(NUMERIC_ARRAY, NUMERIC_ARRAY.length)
  expect(values.every(value => NUMERIC_ARRAY.includes(value))).toBeTruthy()
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received sample size equal to list length, returning shuffled list.")
})

// error cases

test("Throw error if list is not provided", () => {
  // @ts-ignore
  expect(() => RandomList.sample()).toThrow()
})

test("Throw error for non array list", () => {
  // @ts-ignore
  expect(() => RandomList.sample("stringOption")).toThrow()
})

test("Throw error for non numeric sample size", () => {
  // @ts-ignore
  expect(() => RandomList.sample(NUMERIC_ARRAY, "invalidCount")).toThrow()
})

test("Throw error for negative sample size", () => {
  expect(() => RandomList.sample(NUMERIC_ARRAY, -5)).toThrow()
})

test("Throw error for infinite length value", () => {
  expect(() => RandomList.sample(NUMERIC_ARRAY, Infinity)).toThrow()
})

test("Throw error for sample size greater than list", () => {
  expect(() => RandomList.sample(NUMERIC_ARRAY, NUMERIC_ARRAY.length + 1)).toThrow()
})
