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

const PRECISION = 4
const PRECISION_LENGTH = {
  PRECISION: 6,
  LENGTH: 10,
}
const PRECISION_MIN_MAX_LENGTH = {
  PRECISION: 6,
  LENGTH: 10,
  MIN: 10,
  MAX: 30,
}

const MIN_EQUAL_MAX = 10
const MIN_EQUAL_MAX_LENGTH = {
  VALUE: 10,
  LENGTH: 10,
}
const FLOAT_MIN_EQUAL_MAX = 10
const FLOAT_MIN_EQUAL_MAX_LENGTH = {
  VALUE: 10.5,
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
const NEG_MIN_POS_MAX = {
  MIN: -10,
  MAX: 10,
}
const NEG_MIN_POS_MAX_LENGTH = {
  MIN: -10,
  MAX: 10,
  LENGTH: 10,
}
const FLOAT_NEG_MIN_POS_MAX = {
  MIN: -10.5,
  MAX: 10.5,
}
const FLOAT_NEG_MIN_POS_MAX_LENGTH = {
  MIN: -10.5,
  MAX: 10.5,
  LENGTH: 10,
}

const LARGE_RANGE = {
  MIN: -10_000,
  MAX: 10_000,
  LENGTH: 100,
}
const FLOAT_LARGE_RANGE = {
  MIN: -10_000.555,
  MAX: 10_000.555,
  LENGTH: 100,
}

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
    const values = RandomNumber.floatArray({
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

test(`Return random float array of length ${MIN_LENGTH.LENGTH} with each value more than ${MIN_LENGTH.MIN}, but less than ${MIN_LENGTH.MIN + 1}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: MIN_LENGTH.MIN,
      length: MIN_LENGTH.LENGTH,
    })
    expect(values.length).toBe(MIN_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(MIN_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(MIN_LENGTH.MIN + 1)
    })
  }
})

test(`Return random float array of length ${MAX_LENGTH.LENGTH} with each value less than ${MAX_LENGTH.MAX}, but greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
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

test(`Return random float array of length ${MIN_MAX_LENGTH.LENGTH} with each value to be between ${MIN_MAX_LENGTH.MIN} & ${MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
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

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to be between ${FLOAT_MIN_MAX.MIN} & ${FLOAT_MIN_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_MAX.MIN,
      max: FLOAT_MIN_MAX.MAX,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_MAX.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_MIN_MAX.MAX)
    })
  }
})

test(`Return random float array of length ${FLOAT_MIN_LENGTH.LENGTH} with each value more than ${FLOAT_MIN_LENGTH.MIN}, but less than ${FLOAT_MIN_LENGTH.MIN + 1}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_LENGTH.MIN,
      length: FLOAT_MIN_LENGTH.LENGTH,
    })
    expect(values.length).toBe(FLOAT_MIN_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_MIN_LENGTH.MIN + 1)
    })
  }
})

test(`Return random float array of length ${FLOAT_MAX_LENGTH.LENGTH} with each value less than ${FLOAT_MAX_LENGTH.MAX}, but greater than ${DEFAULT.MIN}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      max: FLOAT_MAX_LENGTH.MAX,
      length: FLOAT_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(FLOAT_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeLessThanOrEqual(FLOAT_MAX_LENGTH.MAX)
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
    })
  }
})

test(`Return random float array of length ${FLOAT_MIN_MAX_LENGTH.LENGTH} with each value to be between ${FLOAT_MIN_MAX_LENGTH.MIN} & ${FLOAT_MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_MAX_LENGTH.MIN,
      max: FLOAT_MIN_MAX_LENGTH.MAX,
      length: FLOAT_MIN_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(FLOAT_MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_MIN_MAX_LENGTH.MAX)
    })
  }
})

test(`Return empty array when length is 0`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ length: 0 })
    expect(values.length).toBe(0)
  }
})


// precision

test(`Return random float array of length ${DEFAULT.LENGTH} with each value to have precision of ${PRECISION}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ precision: PRECISION })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
      expect(Number(value.toFixed(PRECISION))).toBe(value)
    })
  }
})

test(`Return random float array of length ${PRECISION_LENGTH.LENGTH} with each value to have precision of ${PRECISION_LENGTH.PRECISION}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      precision: PRECISION_LENGTH.PRECISION,
      length: PRECISION_LENGTH.LENGTH,
    })
    expect(values.length).toBe(PRECISION_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(DEFAULT.MIN)
      expect(value).toBeLessThanOrEqual(DEFAULT.MAX)
      expect(Number(value.toFixed(PRECISION_LENGTH.PRECISION))).toBe(value)
    })
  }
})

test(`Return random float array of length ${PRECISION_MIN_MAX_LENGTH.LENGTH} with each value to have precision of ${PRECISION_MIN_MAX_LENGTH.PRECISION}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      precision: PRECISION_MIN_MAX_LENGTH.PRECISION,
      length: PRECISION_MIN_MAX_LENGTH.LENGTH,
      min: PRECISION_MIN_MAX_LENGTH.MIN,
      max: PRECISION_MIN_MAX_LENGTH.MAX,
    })
    expect(values.length).toBe(PRECISION_MIN_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(PRECISION_MIN_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(PRECISION_MIN_MAX_LENGTH.MAX)
      expect(Number(value.toFixed(PRECISION_MIN_MAX_LENGTH.PRECISION))).toBe(value)
    })
  }
})


// equal min and max

test(`Return ${MIN_EQUAL_MAX} when min & max equals ${MIN_EQUAL_MAX}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
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
    const values = RandomNumber.floatArray({
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
    const values = RandomNumber.floatArray({
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
    const values = RandomNumber.floatArray({
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

test(`Return ${FLOAT_MIN_EQUAL_MAX} when min & max equals ${FLOAT_MIN_EQUAL_MAX}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_EQUAL_MAX,
      max: FLOAT_MIN_EQUAL_MAX,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(FLOAT_MIN_EQUAL_MAX)
      expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${FLOAT_MIN_EQUAL_MAX}.`)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${FLOAT_MIN_EQUAL_MAX} when min & max equals ${FLOAT_MIN_EQUAL_MAX} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_EQUAL_MAX,
      max: FLOAT_MIN_EQUAL_MAX,
      skipWarning: true,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(FLOAT_MIN_EQUAL_MAX)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE} array of length ${FLOAT_MIN_EQUAL_MAX_LENGTH.LENGTH} when min & max equals ${FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE,
      max: FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE,
      length: FLOAT_MIN_EQUAL_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(FLOAT_MIN_EQUAL_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE)
      expect(warnSpy).toHaveBeenLastCalledWith(`Warning: min and max are equal. Returning the value ${FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE}.`)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(ITERATIONS)
})

test(`Return ${FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE} array of length ${FLOAT_MIN_EQUAL_MAX_LENGTH.LENGTH} when min & max equals ${FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE} and skip warning`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE,
      max: FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE,
      length: FLOAT_MIN_EQUAL_MAX_LENGTH.LENGTH,
      skipWarning: true,
    })
    expect(values.length).toBe(FLOAT_MIN_EQUAL_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBe(FLOAT_MIN_EQUAL_MAX_LENGTH.VALUE)
    })
  }
  expect(warnSpy).toHaveBeenCalledTimes(0)
})

test(`Return ${0} when min & max equals ${0}`, () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({ min: 0, max: 0 })
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
    const values = RandomNumber.floatArray({
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
    const values = RandomNumber.floatArray({
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
    const values = RandomNumber.floatArray({
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

test(`Return random float array of length ${NEGATIVE_MIN_MAX_LENGTH.LENGTH} with each value to be between ${NEGATIVE_MIN_MAX_LENGTH.MIN} & ${NEGATIVE_MIN_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
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

test(`Return random float to be between ${NEG_MIN_POS_MAX.MIN} & ${NEG_MIN_POS_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: NEG_MIN_POS_MAX.MIN,
      max: NEG_MIN_POS_MAX.MAX,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(NEG_MIN_POS_MAX.MIN)
      expect(value).toBeLessThanOrEqual(NEG_MIN_POS_MAX.MAX)
    })
  }
})

test(`Return random float array of length ${NEG_MIN_POS_MAX_LENGTH.LENGTH} to be between ${NEG_MIN_POS_MAX_LENGTH.MIN} & ${NEG_MIN_POS_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
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

test(`Return random float to be between ${FLOAT_NEG_MIN_POS_MAX.MIN} & ${FLOAT_NEG_MIN_POS_MAX.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_NEG_MIN_POS_MAX.MIN,
      max: FLOAT_NEG_MIN_POS_MAX.MAX,
    })
    expect(values.length).toBe(DEFAULT.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_NEG_MIN_POS_MAX.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_NEG_MIN_POS_MAX.MAX)
    })
  }
})

test(`Return random float array of length ${FLOAT_NEG_MIN_POS_MAX_LENGTH.LENGTH} to be between ${FLOAT_NEG_MIN_POS_MAX_LENGTH.MIN} & ${FLOAT_NEG_MIN_POS_MAX_LENGTH.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_NEG_MIN_POS_MAX_LENGTH.MIN,
      max: FLOAT_NEG_MIN_POS_MAX_LENGTH.MAX,
      length: FLOAT_NEG_MIN_POS_MAX_LENGTH.LENGTH,
    })
    expect(values.length).toBe(FLOAT_NEG_MIN_POS_MAX_LENGTH.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_NEG_MIN_POS_MAX_LENGTH.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_NEG_MIN_POS_MAX_LENGTH.MAX)
    })
  }
})

test(`Return random float array of length ${LARGE_RANGE.LENGTH} to be between ${LARGE_RANGE.MIN} & ${LARGE_RANGE.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
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


test(`Return random float array of length ${FLOAT_LARGE_RANGE.LENGTH} to be between ${FLOAT_LARGE_RANGE.MIN} & ${FLOAT_LARGE_RANGE.MAX}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const values = RandomNumber.floatArray({
      min: FLOAT_LARGE_RANGE.MIN,
      max: FLOAT_LARGE_RANGE.MAX,
      length: FLOAT_LARGE_RANGE.LENGTH,
    })
    expect(values.length).toBe(FLOAT_LARGE_RANGE.LENGTH)
    values.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(FLOAT_LARGE_RANGE.MIN)
      expect(value).toBeLessThanOrEqual(FLOAT_LARGE_RANGE.MAX)
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

test("Throw error for infinite length value", () => {
  expect(() => RandomNumber.floatArray({ length: Infinity })).toThrow()
})
