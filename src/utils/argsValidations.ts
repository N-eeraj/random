export function checkIsNumeric(key: string, arg?: number) {
  if (arg !== undefined && typeof arg !== "number") {
    throw new Error(`${key} must be a number, received ${arg} of type ${typeof arg}`)
  }
}

export function checkMinValue(key: string, arg: number | undefined, min: number) {
  if (arg !== undefined && arg < min) {
    throw new Error(`Expected ${key} to be at least ${min}, received ${arg}`)
  }
}
