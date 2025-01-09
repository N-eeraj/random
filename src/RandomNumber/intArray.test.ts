import {
  test,
  expect,
} from "vitest"
import RandomNumber from "./index"

const ITERATIONS = 1_000
const DEFAULT = {
  MIN: 0,
  MAX: 100,
  LENGTH: 1,
}
const ONLY_MAX = 5
const ONLY_MIN = 5
const ONLY_LENGTH = 5

const MIN_MAX = {
  MIN: 10,
  MAX: 30,
}

const MIN_LENGTH = {
  MIN: 10,
  LENGTH: 10,
}

const MAX_LENGTH = {
  MAX: 30,
  LENGTH: 10,
}

const MIN_MAX_LENGTH = {
  MIN: 10,
  MAX: 30,
  LENGTH: 10,
}

const NEGATIVE_MAX = -10
const NEGATIVE_MIN = -10

const NEGATIVE_MIN_MAX = {
  MIN: -20,
  MAX: -10,
}

const NEGATIVE_MIN_MAX_LENGTH = {
  MIN: -20,
  MAX: -10,
  LENGTH: 5,
}

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value between ${DEFAULT.MIN} & ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray()
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
    })
  }
})

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value less than ${ONLY_MAX}, but less greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ max: ONLY_MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(ONLY_MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value more than ${ONLY_MIN}, but less than ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: ONLY_MIN })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(ONLY_MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
    })
  }
})

test(`Return random integer array of length ${ONLY_LENGTH} with each value between ${DEFAULT.MIN} & ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ length: ONLY_LENGTH })
    expect(values.length).toBe(ONLY_LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
    })
  }
})

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value to be between ${MIN_MAX.MIN} & ${MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: MIN_MAX.MIN, max: MIN_MAX.MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(MIN_MAX.MAX)
    })
  }
})

test(`Return random integer array of length ${MIN_LENGTH.LENGTH} with each value more than ${MIN_LENGTH.MIN}, but less than ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: MIN_LENGTH.MIN, length: MIN_LENGTH.LENGTH })
    expect(values.length).toBe(MIN_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
    })
  }
})

test(`Return random integer array of length ${MAX_LENGTH.LENGTH} with each value less than ${MAX_LENGTH.MAX}, but greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ max: MAX_LENGTH.MAX, length: MAX_LENGTH.LENGTH })
    expect(values.length).toBe(MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(MAX_LENGTH.MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random integer array of length ${MIN_MAX_LENGTH.LENGTH} with each value to be between ${MIN_MAX_LENGTH.MIN} & ${MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: MIN_MAX_LENGTH.MIN, max: MIN_MAX_LENGTH.MAX, length: MIN_MAX_LENGTH.LENGTH })
    expect(values.length).toBe(MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(MIN_MAX_LENGTH.MAX)
    })
  }
})


// negative values

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value to be less than ${NEGATIVE_MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ max: NEGATIVE_MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(NEGATIVE_MAX)
    })
  }
})

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value to be more than ${NEGATIVE_MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: NEGATIVE_MIN })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN)
    })
  }
})

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value  to be between ${NEGATIVE_MIN_MAX.MIN} & ${NEGATIVE_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: NEGATIVE_MIN_MAX.MIN, max: NEGATIVE_MIN_MAX.MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX.MAX)
    })
  }
})

test(`Return random integer array of length ${NEGATIVE_MIN_MAX_LENGTH.LENGTH} with each value  to be between ${NEGATIVE_MIN_MAX_LENGTH.MIN} & ${NEGATIVE_MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: NEGATIVE_MIN_MAX_LENGTH.MIN, max: NEGATIVE_MIN_MAX_LENGTH.MAX, length: NEGATIVE_MIN_MAX_LENGTH.LENGTH })
    expect(values.length).toBe(NEGATIVE_MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX_LENGTH.MAX)
    })
  }
})


// error cases

test("Minimum should be lesser than maximum", () => {
  expect(() => RandomNumber.intArray({ min: 11, max: 10 })).toThrow()
})

test("Throw error for non numeric min", () => {
  // @ts-ignore
  expect(() => RandomNumber.intArray({ min: "10" })).toThrow()
})

test("Throw error for non numeric max", () => {
  // @ts-ignore
  expect(() => RandomNumber.intArray({ max: "10" })).toThrow()
})

test("Throw error for non numeric length", () => {
  // @ts-ignore
  expect(() => RandomNumber.intArray({ length: "10" })).toThrow()
})

test("Throw error for negative length value", () => {
  expect(() => RandomNumber.intArray({ length: -5 })).toThrow()
})
