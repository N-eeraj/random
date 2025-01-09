import {
  test,
  expect,
} from "vitest"
import RandomNumber from "./index"

const ITERATIONS = 1_000
const DEFAULT = {
  MIN: 0,
  MAX: 1,
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

const FLOAT_MIN_MAX = {
  MIN: 10.25,
  MAX: 10.75,
}

const FLOAT_MIN_LENGTH = {
  MIN: 10.25,
  LENGTH: 10,
}

const FLOAT_MAX_LENGTH = {
  MAX: 10.75,
  LENGTH: 10,
}

const FLOAT_MIN_MAX_LENGTH = {
  MIN: 10.25,
  MAX: 10.75,
  LENGTH: 10,
}

const NEGATIVE_MAX = -10
const NEGATIVE_MIN = -10

const NEGATIVE_MIN_MAX = {
  MIN: -10.5,
  MAX: -10,
}

const NEGATIVE_MIN_MAX_LENGTH = {
  MIN: -10.5,
  MAX: -10,
  LENGTH: 5,
}

const PRECISION = 4

test(`Return random float array of length ${DEFAULT.LENGTH} with each value between ${DEFAULT.MIN} & ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray()
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value less than ${ONLY_MAX}, but less greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ max: ONLY_MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(ONLY_MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value more than ${ONLY_MIN}, but less than ${ONLY_MIN + 1}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: ONLY_MIN })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(ONLY_MIN)
      expect(value).toBeLessThanOrEqual(ONLY_MIN + 1)
    })
  }
})

test(`Return random float array of length ${ONLY_LENGTH} with each value between ${DEFAULT.MIN} & ${DEFAULT.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ length: ONLY_LENGTH })
    expect(values.length).toBe(ONLY_LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to be between ${MIN_MAX.MIN} & ${MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: MIN_MAX.MIN, max: MIN_MAX.MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(MIN_MAX.MAX)
    })
  }
})

test(`Return random float array of length ${MIN_LENGTH.LENGTH} with each value more than ${MIN_LENGTH.MIN}, but less than ${MIN_LENGTH.MIN + 1}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: MIN_LENGTH.MIN, length: MIN_LENGTH.LENGTH })
    expect(values.length).toBe(MIN_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(MIN_LENGTH.MIN + 1)
    })
  }
})

test(`Return random float array of length ${MAX_LENGTH.LENGTH} with each value less than ${MAX_LENGTH.MAX}, but greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ max: MAX_LENGTH.MAX, length: MAX_LENGTH.LENGTH })
    expect(values.length).toBe(MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(MAX_LENGTH.MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random float array of length ${MIN_MAX_LENGTH.LENGTH} with each value to be between ${MIN_MAX_LENGTH.MIN} & ${MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: MIN_MAX_LENGTH.MIN, max: MIN_MAX_LENGTH.MAX, length: MIN_MAX_LENGTH.LENGTH })
    expect(values.length).toBe(MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(MIN_MAX_LENGTH.MAX)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to be between ${FLOAT_MIN_MAX.MIN} & ${FLOAT_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: FLOAT_MIN_MAX.MIN, max: FLOAT_MIN_MAX.MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_MIN_MAX.MAX)
    })
  }
})

test(`Return random float array of length ${FLOAT_MIN_LENGTH.LENGTH} with each value more than ${FLOAT_MIN_LENGTH.MIN}, but less than ${FLOAT_MIN_LENGTH.MIN + 1}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: FLOAT_MIN_LENGTH.MIN, length: FLOAT_MIN_LENGTH.LENGTH })
    expect(values.length).toBe(FLOAT_MIN_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_MIN_LENGTH.MIN + 1)
    })
  }
})

test(`Return random float array of length ${FLOAT_MAX_LENGTH.LENGTH} with each value less than ${FLOAT_MAX_LENGTH.MAX}, but greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ max: FLOAT_MAX_LENGTH.MAX, length: FLOAT_MAX_LENGTH.LENGTH })
    expect(values.length).toBe(FLOAT_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(FLOAT_MAX_LENGTH.MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random float array of length ${FLOAT_MIN_MAX_LENGTH.LENGTH} with each value to be between ${FLOAT_MIN_MAX_LENGTH.MIN} & ${FLOAT_MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: FLOAT_MIN_MAX_LENGTH.MIN, max: FLOAT_MIN_MAX_LENGTH.MAX, length: FLOAT_MIN_MAX_LENGTH.LENGTH })
    expect(values.length).toBe(FLOAT_MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_MIN_MAX_LENGTH.MAX)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to have precision of ${PRECISION}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ precision: PRECISION })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
      expect(String(value).length).toBeLessThanOrEqual(6)
    })
  }
})

// negative values

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to be less than ${NEGATIVE_MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ max: NEGATIVE_MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(NEGATIVE_MAX)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to be more than ${NEGATIVE_MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: NEGATIVE_MIN })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN)
    })
  }
})

test(`Return random float array of length ${DEFAULT.LENGTH} with each value  to be between ${NEGATIVE_MIN_MAX.MIN} & ${NEGATIVE_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: NEGATIVE_MIN_MAX.MIN, max: NEGATIVE_MIN_MAX.MAX })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX.MAX)
    })
  }
})

test(`Return random float array of length ${NEGATIVE_MIN_MAX_LENGTH.LENGTH} with each value  to be between ${NEGATIVE_MIN_MAX_LENGTH.MIN} & ${NEGATIVE_MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: NEGATIVE_MIN_MAX_LENGTH.MIN, max: NEGATIVE_MIN_MAX_LENGTH.MAX, length: NEGATIVE_MIN_MAX_LENGTH.LENGTH })
    expect(values.length).toBe(NEGATIVE_MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX_LENGTH.MAX)
    })
  }
})


// error cases

test("Minimum should be lesser than maximum", () => {
  expect(() => RandomNumber.floatArray({ min: 11, max: 10 })).toThrow()
})

test("Throw error for non numeric min", () => {
  // @ts-ignore
  expect(() => RandomNumber.floatArray({ min: "10" })).toThrow()
})

test("Throw error for non numeric max", () => {
  // @ts-ignore
  expect(() => RandomNumber.floatArray({ max: "10" })).toThrow()
})

test("Throw error for non numeric precision", () => {
  // @ts-ignore
  expect(() => RandomNumber.floatArray({ precision: "10" })).toThrow()
})

test("Throw error for non numeric length", () => {
  // @ts-ignore
  expect(() => RandomNumber.floatArray({ length: "10" })).toThrow()
})

test("Throw error for negative length value", () => {
  expect(() => RandomNumber.floatArray({ length: -5 })).toThrow()
})
