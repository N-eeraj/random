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
