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


// warning cases

test(`Return ${NUMERIC_ARRAY} array as it is with 0 mix count`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.shuffle(NUMERIC_ARRAY, 0)
  values.forEach((value, index) => {
    expect(value).toBe(NUMERIC_ARRAY[index])
  })
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received mix count 0, returning un-shuffled list.")
})

test(`Return ${MULTI_TYPE_ARRAY} array as it is with 0 mix count`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.shuffle(MULTI_TYPE_ARRAY, 0)
  values.forEach((value, index) => {
    expect(value).toBe(MULTI_TYPE_ARRAY[index])
  })
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received mix count 0, returning un-shuffled list.")
})

test(`Return ${[SINGLE_ITEM]} array as it is with 0 mix count`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.shuffle([SINGLE_ITEM], 0)
  values.forEach((value, index) => {
    expect(value).toBe([SINGLE_ITEM][index])
  })
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received mix count 0, returning un-shuffled list.")
})

test(`Return empty array with warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.shuffle([])
  expect(values.length).toBe(0)
  expect(warnSpy).toHaveBeenLastCalledWith(`Warning: cannot shuffle list ${[]}, list too small, returning un-shuffled list.`)
})

test(`Return empty array with warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const values = RandomList.shuffle([SINGLE_ITEM])
  expect(values.length).toBe(1)
  expect(warnSpy).toHaveBeenLastCalledWith(`Warning: cannot shuffle list ${[SINGLE_ITEM]}, list too small, returning un-shuffled list.`)
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
