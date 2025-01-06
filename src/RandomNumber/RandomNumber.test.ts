import {
  test,
  expect,
} from "vitest"
import RandomNumber from "./index"

test("Return random number", () => {
  const float = RandomNumber.float()
  for (let i = 0; i < 1_000; i++) {
    expect(float).toBeLessThanOrEqual(1)
    expect(float).toBeGreaterThanOrEqual(0)
  }
})

test("Return random number less than 5", () => {
  for (let i = 0; i < 1_000; i++) {
    const max5 = RandomNumber.float({ max: 5 })
    expect(max5).toBeLessThanOrEqual(5)
  }
})

test("Return random number more than 5", () => {
  for (let i = 0; i < 1_000; i++) {
    const min5 = RandomNumber.float({ min: 5 })
    expect(min5).toBeGreaterThanOrEqual(5)
  }
})

test("Return random number to be between 10 & 30", () => {
  for (let i = 0; i < 1_000; i++) {
    const value = RandomNumber.float({ min: 10, max: 30 })
    expect(value).toBeGreaterThanOrEqual(10)
    expect(value).toBeLessThanOrEqual(30)
  }
})

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
