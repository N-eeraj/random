export function checkIsOfType(key: string, expectedType: string, arg?: unknown) {
  if (arg !== undefined && typeof arg !== expectedType) {
    throw new Error(`${key} must be a expectedType, received ${arg} of type ${typeof arg}`)
  }
}

export function checkMinValue(key: string, arg: number | undefined, min: number) {
  if (arg !== undefined && arg < min) {
    throw new Error(`Expected ${key} to be at least ${min}, received ${arg}`)
  }
}
