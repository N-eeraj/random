import {
  vi,
  test,
  expect,
} from "vitest"
import RandomList from "."

const NUMERIC_CHOICES = [1, 2, 3, 4]
const MULTI_TYPE_CHOICES = [1, "abc", 300, [123, "xyz", { abc: 123 }]]
const SINGLE_ITEM = "HELLO WORLD!"

const ITERATIONS = 1_000

test(`Return a random element from ${NUMERIC_CHOICES}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomList.choice(NUMERIC_CHOICES)
    expect(NUMERIC_CHOICES).toContain(value)
    expect(value).toBeTypeOf("number")
  }
})

test(`Return a random element from ${MULTI_TYPE_CHOICES}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomList.choice(MULTI_TYPE_CHOICES)
    expect(MULTI_TYPE_CHOICES).toContain(value)
    expect(MULTI_TYPE_CHOICES.map(element => typeof element)).toContain(typeof value)
  }
})

test(`Return ${SINGLE_ITEM}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomList.choice([SINGLE_ITEM])
    expect(value).toBe(SINGLE_ITEM)
  }
})


test("Throw warning if provided an empty list", () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomList.choice([])
    expect(value).toBe(null)
    expect(warnSpy).toHaveBeenLastCalledWith("Warning: given empty list, returning null.")
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

// error cases

test("Throw error if list is not provided", () => {
  // @ts-ignore
  expect(() => RandomList.choice()).toThrow()
})

test("Throw error for non array list", () => {
  // @ts-ignore
  expect(() => RandomList.choice("stringOption")).toThrow()
})
