export function checkIsOfType(key: string, expectedType: string, arg: unknown) {
  if (expectedType === "array" && Array.isArray(arg)) {
    return
  }
  if (typeof arg !== expectedType) {
    throw new Error(`${key} must be a ${expectedType}, received ${arg} of type ${typeof arg}`)
  } else if (expectedType === "number" && (arg === Infinity || arg === -Infinity)) {
    throw new Error(`Expected ${key} to be finite number received Infinity`)
  }
}

export function checkOptionalIsOfType(key: string, expectedType: string, arg?: unknown) {
  if (arg !== undefined) {
    checkIsOfType(key, expectedType, arg)
  }
}

export function checkMinValue(key: string, arg: number | undefined, min: number) {
  if (arg !== undefined && arg < min) {
    throw new Error(`Expected ${key} to be at least ${min}, received ${arg}`)
  }
}
