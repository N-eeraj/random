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


// empty string with only lower option


// empty string with only upper option


// empty string with only number option


// empty string with lower and upper options


// empty string with lower, upper and number options


// empty string with lower and number options


// empty string with upper and upper options


// error cases

// invalid from type
// invalid strLen type
// strLen < 0
// invalid options type
// empty source string
