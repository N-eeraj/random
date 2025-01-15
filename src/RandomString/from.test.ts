import {
  test,
  expect,
} from "vitest"
import RandomString from "."
import { LOWER_CASE } from "./lowerCase.test"
import { UPPER_CASE } from "./upperCase.test"
import { LETTERS } from "./letters.test"
import {
  ALPHA_NUM,
  STRING_NUMBERS,
} from "./alphaNum.test"


const ITERATIONS = 1_000
const SOURCE_STRING = {
  LOWER: "qwertyuiop",
  UPPER: "QWERTYUIOP",
  NUMBER: "2357",
  LETTERS: "aAbBcCdD",
  ALPHA_NUM: "abcABC123",
  LOWER_NUM: "abc123",
  UPPER_NUM: "ABC123",
}
const LENGTH = 30

// source length

test(`Return a string from ${SOURCE_STRING.LOWER} of length ${SOURCE_STRING.LOWER.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.LOWER)
    expect(value.length).toBe(SOURCE_STRING.LOWER.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.LOWER).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.UPPER} of length ${SOURCE_STRING.UPPER.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.UPPER)
    expect(value.length).toBe(SOURCE_STRING.UPPER.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.UPPER).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.NUMBER} of length ${SOURCE_STRING.NUMBER.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.NUMBER)
    expect(value.length).toBe(SOURCE_STRING.NUMBER.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.NUMBER).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.LETTERS} of length ${SOURCE_STRING.LETTERS.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.LETTERS)
    expect(value.length).toBe(SOURCE_STRING.LETTERS.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.LETTERS).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.ALPHA_NUM} of length ${SOURCE_STRING.ALPHA_NUM.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.ALPHA_NUM)
    expect(value.length).toBe(SOURCE_STRING.ALPHA_NUM.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.ALPHA_NUM).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.LOWER_NUM} of length ${SOURCE_STRING.LOWER_NUM.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.LOWER_NUM)
    expect(value.length).toBe(SOURCE_STRING.LOWER_NUM.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.LOWER_NUM).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.UPPER_NUM} of length ${SOURCE_STRING.UPPER_NUM.length}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.UPPER_NUM)
    expect(value.length).toBe(SOURCE_STRING.UPPER_NUM.length)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.UPPER_NUM).toContain(letter))
  }
})


// with explicit length

test(`Return a string from ${SOURCE_STRING.LOWER} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.LOWER, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.LOWER).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.UPPER} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.UPPER, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.UPPER).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.NUMBER} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.NUMBER, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.NUMBER).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.LETTERS} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.LETTERS, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.LETTERS).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.ALPHA_NUM} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.ALPHA_NUM, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.ALPHA_NUM).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.LOWER_NUM} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.LOWER_NUM, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.LOWER_NUM).toContain(letter))
  }
})

test(`Return a string from ${SOURCE_STRING.UPPER_NUM} of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from(SOURCE_STRING.UPPER_NUM, LENGTH)
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(SOURCE_STRING.UPPER_NUM).toContain(letter))
  }
})


// empty string with options

test(`Return a string of lower case of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      lower: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(LOWER_CASE).toContain(letter))
  }
})

test(`Return a string of upper case of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      upper: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(UPPER_CASE).toContain(letter))
  }
})

test(`Return a string of numbers of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      number: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(STRING_NUMBERS).toContain(letter))
  }
})

test(`Return a string of letters of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      lower: true,
      upper: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(LETTERS).toContain(letter))
  }
})

test(`Return a string of alpha numeric characters of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      lower: true,
      upper: true,
      number: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect(ALPHA_NUM).toContain(letter))
  }
})

test(`Return a string of lower case letters & numbers of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      lower: true,
      number: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect([...LOWER_CASE, ...STRING_NUMBERS]).toContain(letter))
  }
})

test(`Return a string of upper case letters & numbers of length ${LENGTH}`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    const value = RandomString.from("", LENGTH, {
      upper: true,
      number: true,
    })
    expect(value.length).toBe(LENGTH)
    value.split("")
      .forEach(letter => expect([...UPPER_CASE, ...STRING_NUMBERS]).toContain(letter))
  }
})


// error cases

test("Throw error for non string from", () => {
  // @ts-ignore
  expect(() => RandomString.from(undefined)).toThrow()
})

test("Throw error for non numeric string length", () => {
  // @ts-ignore
  expect(() => RandomString.from(SOURCE_STRING.LETTERS, "10")).toThrow()
})

test("Throw error for negative string length value", () => {
  expect(() => RandomString.from(SOURCE_STRING.LETTERS, -5)).toThrow()
})

test("Throw error for infinite string length value", () => {
  expect(() => RandomString.from(SOURCE_STRING.LETTERS, Infinity)).toThrow()
})

test("Throw error for non object options", () => {
  // @ts-ignore
  expect(() => RandomString.from(SOURCE_STRING.LETTERS, LENGTH, "")).toThrow()
})

test("Throw error for empty source string", () => {
  expect(() => RandomString.from("", LENGTH)).toThrow()
})
