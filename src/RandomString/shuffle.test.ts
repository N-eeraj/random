import {
  vi,
  test,
  expect,
} from "vitest"
import RandomString from "."

const SOURCE_STRING = "HELLO WORLD!"
const SINGLE_CHARACTER = "X"

const ITERATIONS = 1_000

test(`Return shuffled string from ${SOURCE_STRING}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.shuffle(SOURCE_STRING)
    expect(SOURCE_STRING.split("").every((element) => value.includes(element))).toBeTruthy()
  }
})


// warning cases

test(`Return ${SOURCE_STRING} as it is with 0 mix count`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const value = RandomString.shuffle(SOURCE_STRING, 0)
  value.split("").forEach((val, index) => {
    expect(val).toBe(SOURCE_STRING[index])
  })
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received mix count 0, returning un-shuffled string.")
})

test(`Return ${SINGLE_CHARACTER} as it is with 0 mix count`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const value = RandomString.shuffle(SINGLE_CHARACTER, 0)
  value.split("").forEach((val, index) => {
    expect(val).toBe([SINGLE_CHARACTER][index])
  })
  expect(warnSpy).toHaveBeenLastCalledWith("Warning: received mix count 0, returning un-shuffled string.")
})

test(`Return empty string with warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const value = RandomString.shuffle("")
  expect(value.length).toBe(0)
  expect(warnSpy).toHaveBeenLastCalledWith(`Warning: cannot shuffle string ${[]}, string too small, returning un-shuffled string.`)
})

test(`Return ${SINGLE_CHARACTER} with warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const value = RandomString.shuffle(SINGLE_CHARACTER)
  expect(value.length).toBe(1)
  expect(warnSpy).toHaveBeenLastCalledWith(`Warning: cannot shuffle string ${SINGLE_CHARACTER}, string too small, returning un-shuffled string.`)
})


// error cases

test("Throw error if string is not provided", () => {
  // @ts-ignore
  expect(() => RandomString.shuffle()).toThrow()
})

test("Throw error for non string argument", () => {
  // @ts-ignore
  expect(() => RandomString.shuffle([])).toThrow()
})

test("Throw error for non numeric mix count", () => {
  // @ts-ignore
  expect(() => RandomString.shuffle(SOURCE_STRING, "invalidCount")).toThrow()
})

test("Throw error for negative mix count", () => {
  expect(() => RandomString.shuffle(SOURCE_STRING, -5)).toThrow()
})

test("Throw error for infinite length value", () => {
  expect(() => RandomString.shuffle(SOURCE_STRING, Infinity)).toThrow()
})
