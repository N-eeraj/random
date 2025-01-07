import {
  test,
  expect,
} from "vitest"
import RandomNumber from "./index"

const ITERATIONS = 1_000
const DEFAULT = {
  MIN: 0,
  MAX: 100,
}
const ONLY_MAX = 10
const ONLY_MIN = 50

const MIN_MAX = {
  MIN: 40,
  MAX: 60,
}

const NEGATIVE_MAX = -10
const NEGATIVE_MIN = -10

const NEGATIVE_MIN_MAX = {
  MIN: -30,
  MAX: -10,
}

test(`Return random integer between ${DEFAULT.MIN} & ${DEFAULT.MAX}`, () => {
  const float = RandomNumber.int()
  for (let i = 0; i < ITERATIONS; i++) {
    expect(float).toBeGreaterThanOrEqual(DEFAULT.MIN)
    expect(float).toBeLessThanOrEqual(DEFAULT.MAX)
  }
})

test(`Return random integer less than ${ONLY_MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const onlyMax = RandomNumber.int({ max: ONLY_MAX })
    expect(onlyMax).toBeLessThanOrEqual(ONLY_MAX)
  }
})

test(`Return random integer more than ${ONLY_MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const onlyMin = RandomNumber.int({ min: ONLY_MIN })
    expect(onlyMin).toBeGreaterThanOrEqual(ONLY_MIN)
  }
})

test(`Return random integer to be between ${MIN_MAX.MIN} & ${MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.int({ min: MIN_MAX.MIN, max: MIN_MAX.MAX })
    expect(value).toBeGreaterThanOrEqual(MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(MIN_MAX.MAX)
  }
})


// negative values

test(`Return random integer to less than ${NEGATIVE_MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.int({ max: NEGATIVE_MAX })
    expect(value).toBeLessThanOrEqual(NEGATIVE_MAX)
  }
})

test(`Return random integer to more than ${NEGATIVE_MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.int({ min: NEGATIVE_MIN })
    expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN)
  }
})

test(`Return random integer to be between ${NEGATIVE_MIN_MAX.MIN} & ${NEGATIVE_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.int({ min: NEGATIVE_MIN_MAX.MIN, max: NEGATIVE_MIN_MAX.MAX })
    expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX.MAX)
  }
})


// error cases

test("Minimum should be lesser than maximum", () => {
  expect(() => RandomNumber.int({ min: 11, max: 10 })).toThrow()
})

test("Throw error for non numeric min", () => {
  // @ts-ignore
  expect(() => RandomNumber.int({ min: "10" })).toThrow()
})

test("Throw error for non numeric max", () => {
  // @ts-ignore
  expect(() => RandomNumber.int({ max: "10" })).toThrow()
})
