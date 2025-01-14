import {
  vi,
  test,
  expect,
} from "vitest"
import RandomNumber from "."

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

const PRECISION = 4
const MIN_EQUAL_MAX = 10
const FLOAT_MIN_EQUAL_MAX = 10.5

const NEGATIVE_MAX = -10
const NEGATIVE_MIN = -10

const NEGATIVE_MIN_MAX = {
  MIN: -10.5,
  MAX: -10,
}
const NEG_MIN_POS_MAX = {
  MIN: -10,
  MAX: 10,
}
const FLOAT_NEG_MIN_POS_MAX = {
  MIN: -10.5,
  MAX: 10.5,
}

const LARGE_RANGE = {
  MIN: -10_000,
  MAX: 10_000,
}
const FLOAT_LARGE_RANGE = {
  MIN: -10_000.555,
  MAX: 10_000.555,
}


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
    const value = RandomNumber.float({
      min: MIN_MAX.MIN,
      max: MIN_MAX.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(MIN_MAX.MAX)
  }
})

test(`Return random float to be between ${FLOAT_MIN_MAX.MIN} & ${FLOAT_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: FLOAT_MIN_MAX.MIN,
      max: FLOAT_MIN_MAX.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(FLOAT_MIN_MAX.MAX)
  }
})

test(`Return random float with precision of ${PRECISION}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ precision: PRECISION })
    expect(Number(value.toFixed(PRECISION))).toBe(value)
  }
})


// equal min and max

test(`Return ${MIN_EQUAL_MAX} when min & max equals ${MIN_EQUAL_MAX}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: MIN_EQUAL_MAX,
      max: MIN_EQUAL_MAX,
    })
    expect(value).toBe(MIN_EQUAL_MAX)
    expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${MIN_EQUAL_MAX}.`)
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${MIN_EQUAL_MAX} when min & max equals ${MIN_EQUAL_MAX} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: MIN_EQUAL_MAX,
      max: MIN_EQUAL_MAX,
      skipWarning: true,
    })
    expect(value).toBe(MIN_EQUAL_MAX)
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${FLOAT_MIN_EQUAL_MAX} when min & max equals ${FLOAT_MIN_EQUAL_MAX}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: FLOAT_MIN_EQUAL_MAX,
      max: FLOAT_MIN_EQUAL_MAX,
    })
    expect(value).toBe(FLOAT_MIN_EQUAL_MAX)
    expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${FLOAT_MIN_EQUAL_MAX}.`)
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${FLOAT_MIN_EQUAL_MAX} when min & max equals ${FLOAT_MIN_EQUAL_MAX} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: FLOAT_MIN_EQUAL_MAX,
      max: FLOAT_MIN_EQUAL_MAX,
      skipWarning: true,
    })
    expect(value).toBe(FLOAT_MIN_EQUAL_MAX)
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${0} when min & max equals ${0}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({ min: 0, max: 0 })
    expect(value).toBe(0)
    expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${0}.`)
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${0} when min & max equals ${0} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: 0,
      max: 0,
      skipWarning: true,
    })
    expect(value).toBe(0)
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
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
    const value = RandomNumber.float({
      min: NEGATIVE_MIN_MAX.MIN,
      max: NEGATIVE_MIN_MAX.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(NEGATIVE_MIN_MAX.MIN)
    expect(value).toBeLessThanOrEqual(NEGATIVE_MIN_MAX.MAX)
  }
})

test(`Return random float to be between ${NEG_MIN_POS_MAX.MIN} & ${NEG_MIN_POS_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: NEG_MIN_POS_MAX.MIN,
      max: NEG_MIN_POS_MAX.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(NEG_MIN_POS_MAX.MIN)
    expect(value).toBeLessThanOrEqual(NEG_MIN_POS_MAX.MAX)
  }
})

test(`Return random float to be between ${FLOAT_NEG_MIN_POS_MAX.MIN} & ${FLOAT_NEG_MIN_POS_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: FLOAT_NEG_MIN_POS_MAX.MIN,
      max: FLOAT_NEG_MIN_POS_MAX.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(FLOAT_NEG_MIN_POS_MAX.MIN)
    expect(value).toBeLessThanOrEqual(FLOAT_NEG_MIN_POS_MAX.MAX)
  }
})

test(`Return random float to be between ${LARGE_RANGE.MIN} & ${LARGE_RANGE.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: LARGE_RANGE.MIN,
      max: LARGE_RANGE.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(LARGE_RANGE.MIN)
    expect(value).toBeLessThanOrEqual(LARGE_RANGE.MAX)
  }
})

test(`Return random float to be between ${FLOAT_LARGE_RANGE.MIN} & ${FLOAT_LARGE_RANGE.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomNumber.float({
      min: FLOAT_LARGE_RANGE.MIN,
      max: FLOAT_LARGE_RANGE.MAX,
    })
    expect(value).toBeGreaterThanOrEqual(FLOAT_LARGE_RANGE.MIN)
    expect(value).toBeLessThanOrEqual(FLOAT_LARGE_RANGE.MAX)
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
