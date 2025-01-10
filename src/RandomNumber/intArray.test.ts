import {
  vi,
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
const ONLY_MIN = 100
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

const MIN_EQUAL_MAX = 10
const MIN_EQUAL_MAX_LENGTH = {
  VALUE: 10,
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
const NEG_MIN_POS_MAX_LENGTH = {
  MIN: -10,
  MAX: 10,
  LENGTH: 10,
}

const LARGE_RANGE = {
  MIN: -10_000,
  MAX: 10_000,
  LENGTH: 100,
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

test(`Return random integer array of length ${DEFAULT.LENGTH} with each value more than ${ONLY_MIN}, but less than ${ONLY_MIN + 100}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: ONLY_MIN })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(ONLY_MIN)
      expect(value).toBeLessThanOrEqual(ONLY_MIN + 100)
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
    const values = RandomNumber.intArray({
      min: MIN_MAX.MIN,
      max: MIN_MAX.MAX,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(MIN_MAX.MAX)
    })
  }
})

test(`Return random integer array of length ${MIN_LENGTH.LENGTH} with each value more than ${MIN_LENGTH.MIN}, but less than ${MIN_LENGTH.MIN + 100}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: MIN_LENGTH.MIN,
      length: MIN_LENGTH.LENGTH,
    })
    expect(values.length).toBe(MIN_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(MIN_LENGTH.MIN + 100)
    })
  }
})

test(`Return random integer array of length ${MAX_LENGTH.LENGTH} with each value less than ${MAX_LENGTH.MAX}, but greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      max: MAX_LENGTH.MAX,
      length: MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(MAX_LENGTH.MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random integer array of length ${MIN_MAX_LENGTH.LENGTH} with each value to be between ${MIN_MAX_LENGTH.MIN} & ${MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: MIN_MAX_LENGTH.MIN,
      max: MIN_MAX_LENGTH.MAX,
      length: MIN_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(MIN_MAX_LENGTH.MAX)
    })
  }
})

test(`Return empty array when length is 0`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ length: 0 })
    expect(values.length).toBe(0)
  }
})


// equal min and max

test(`Return ${MIN_EQUAL_MAX} when min & max equals ${MIN_EQUAL_MAX}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: MIN_EQUAL_MAX,
      max: MIN_EQUAL_MAX,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(MIN_EQUAL_MAX)
      expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${MIN_EQUAL_MAX}.`)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${MIN_EQUAL_MAX} when min & max equals ${MIN_EQUAL_MAX} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: MIN_EQUAL_MAX,
      max: MIN_EQUAL_MAX,
      skipWarning: true,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(MIN_EQUAL_MAX)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${MIN_EQUAL_MAX_LENGTH.VALUE} array of length ${MIN_EQUAL_MAX_LENGTH.LENGTH} when min & max equals ${MIN_EQUAL_MAX_LENGTH.VALUE}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: MIN_EQUAL_MAX_LENGTH.VALUE,
      max: MIN_EQUAL_MAX_LENGTH.VALUE,
      length: MIN_EQUAL_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(MIN_EQUAL_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(MIN_EQUAL_MAX_LENGTH.VALUE)
      expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${MIN_EQUAL_MAX_LENGTH.VALUE}.`)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${MIN_EQUAL_MAX_LENGTH.VALUE} array of length ${MIN_EQUAL_MAX_LENGTH.LENGTH} when min & max equals ${MIN_EQUAL_MAX_LENGTH.VALUE} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: MIN_EQUAL_MAX_LENGTH.VALUE,
      max: MIN_EQUAL_MAX_LENGTH.VALUE,
      length: MIN_EQUAL_MAX_LENGTH.LENGTH,
      skipWarning: true,
    })
    expect(values.length).toBe(MIN_EQUAL_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(MIN_EQUAL_MAX_LENGTH.VALUE)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${0} when min & max equals ${0}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({ min: 0, max: 0 })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(0)
      expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${0}.`)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${0} when min & max equals ${0} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: 0,
      max: 0,
      skipWarning: true,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(0)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${0} array of length ${MIN_EQUAL_MAX_LENGTH.LENGTH} when min & max equals ${0}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: 0,
      max: 0,
      length: MIN_EQUAL_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(MIN_EQUAL_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(0)
      expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${0}.`)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${0} array of length ${MIN_EQUAL_MAX_LENGTH.LENGTH} when min & max equals ${0} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: 0,
      max: 0,
      length: MIN_EQUAL_MAX_LENGTH.LENGTH,
      skipWarning: true,
    })
    expect(values.length).toBe(MIN_EQUAL_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(0)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
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
    const values = RandomNumber.intArray({
      min: NEGATIVE_MIN_MAX_LENGTH.MIN,
      max: NEGATIVE_MIN_MAX_LENGTH.MAX,
      length: NEGATIVE_MIN_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(NEGATIVE_MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX_LENGTH.MAX)
    })
  }
})

test(`Return random integer array of length ${NEG_MIN_POS_MAX_LENGTH.LENGTH} with each value  to be between ${NEG_MIN_POS_MAX_LENGTH.MIN} & ${NEG_MIN_POS_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: NEG_MIN_POS_MAX_LENGTH.MIN,
      max: NEG_MIN_POS_MAX_LENGTH.MAX,
      length: NEG_MIN_POS_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(NEG_MIN_POS_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEG_MIN_POS_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(NEG_MIN_POS_MAX_LENGTH.MAX)
    })
  }
})

test(`Return random integer array of length ${LARGE_RANGE.LENGTH} with each value  to be between ${LARGE_RANGE.MIN} & ${LARGE_RANGE.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.intArray({
      min: LARGE_RANGE.MIN,
      max: LARGE_RANGE.MAX,
      length: LARGE_RANGE.LENGTH,
    })
    expect(values.length).toBe(LARGE_RANGE.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(LARGE_RANGE.MIN)
      expect(value).toBeLessThanOrEqual(LARGE_RANGE.MAX)
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
