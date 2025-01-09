import {
  test,
  expect,
} from "vitest"
import RandomNumber from "./index"

const ITERATIONS = 1_000
const DEFAULT = {
  MIN: 0,
  MAX: 1,
}
const ONLY_MAX = 5
const ONLY_MIN = 5

const MIN_MAX = {
  MIN: 10,
  MAX: 30,
}

const FLOAT_MIN_MAX = {
  MIN: 10.25,
  MAX: 10.75,
}

const NEGATIVE_MAX = -10
const NEGATIVE_MIN = -10

const NEGATIVE_MIN_MAX = {
  MIN: -10.5,
  MAX: -10,
}

const PRECISION = 4

test(`Return random float between ${DEFAULT.MIN} & ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float()
    expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
  }
})

test(`Return random float less than ${ONLY_MAX}, but less greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ max: ONLY_MAX })
    expect(value).toBeLessThanOrEqual(ONLY_MAX)
    expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
  }
})

test(`Return random float more than ${ONLY_MIN}, but less than ${ONLY_MIN + 1}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ min: ONLY_MIN })
    expect(value).toBeGreaterThanOrEqual(ONLY_MIN)
    expect(value).toBeLessThanOrEqual(ONLY_MIN + 1)
  }
})

test(`Return random float to be between ${MIN_MAX.MIN} & ${MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ min: MIN_MAX.MIN, max: MIN_MAX.MAX })
    expect(value).toBeGreaterThanOrEqual(MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(MIN_MAX.MAX)
  }
})

test(`Return random float to be between ${FLOAT_MIN_MAX.MIN} & ${FLOAT_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ min: FLOAT_MIN_MAX.MIN, max: FLOAT_MIN_MAX.MAX })
    expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(FLOAT_MIN_MAX.MAX)
  }
})

test(`Return random float with precision of ${PRECISION}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ precision: PRECISION })
    expect(String(value).length).toBeLessThanOrEqual(6)
  }
})

// negative values

test(`Return random float to less than ${NEGATIVE_MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ max: NEGATIVE_MAX })
    expect(value).toBeLessThanOrEqual(NEGATIVE_MAX)
  }
})

test(`Return random float to more than ${NEGATIVE_MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ min: NEGATIVE_MIN })
    expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN)
  }
})

test(`Return random float to be between ${NEGATIVE_MIN_MAX.MIN} & ${NEGATIVE_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ min: NEGATIVE_MIN_MAX.MIN, max: NEGATIVE_MIN_MAX.MAX })
    expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX.MAX)
  }
})


// error cases

test("Minimum should be lesser than maximum", () => {
  expect(() => RandomNumber.float({ min: 11, max: 10 })).toThrow()
})

test("Throw error for non numeric min", () => {
  // @ts-ignore
  expect(() => RandomNumber.float({ min: "10" })).toThrow()
})

test("Throw error for non numeric max", () => {
  // @ts-ignore
  expect(() => RandomNumber.float({ max: "10" })).toThrow()
})

test("Throw error for non numeric precision", () => {
  // @ts-ignore
  expect(() => RandomNumber.float({ precision: "10" })).toThrow()
})
