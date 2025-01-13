import {
  test,
  expect,
} from "vitest"
import { randomBoolean } from "./index"

const ITERATIONS = 1_000

test(`Returns boolean`, () => {
  for (let i = 0; i < ITERATIONS; i++) {
    expect(randomBoolean()).toBeTypeOf("boolean")
  }
})
