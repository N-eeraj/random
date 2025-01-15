# RandomNumber

The `RandomNumber` class provides four static methods to generate random numbers based on the provided arguments. You can use these methods to generate random integers, floating-point numbers, and arrays of random values.


### Usage
```ts
import RandomNumber from '@n-eeraj/random/RandomNumber'
```

### Methods

`.float(FloatArgs)`
Generates a random floating-point number (decimal) within the specified range. The method allows you to define minimum, maximum values, and the precision of the generated number.

**Arguments**:
```ts
interface FloatArgs {
  max?: number        // Default: 1
  min?: number        // Default: 0
  precision?: number  // Default: undefined (no precision)
}
```

**Example Usage**:
```ts
RandomNumber.float({ min: 0.5, max: 5.5, precision: 2 })
// Returns a float between 0.5 and 5.5, rounded to 2 decimal places
```
<br />

`.int(IntArgs)`
Generates a random integer within the specified range. The method allows you to define minimum and maximum integer values.

**Arguments**:
```ts
interface IntArgs {
  max?: number  // Default: 100
  min?: number  // Default: 0
}
```

**Example Usage**:
```ts
RandomNumber.int({ min: 10, max: 50 })
// Returns a random integer between 10 and 50
```
<br />

`.floatArray(FloatArrayArgs)`
Generates an array of random floating-point numbers (decimals). You can define the length of the array, the min/max values, and precision for each value.

**Arguments**:
```ts
interface FloatArrayArgs {
  max?: number        // Default: 1
  min?: number        // Default: 0
  precision?: number  // Default: undefined (no precision)
  length?: number     // Default: 1
}
```

**Example Usage**:
```ts
RandomNumber.floatArray({ min: 0, max: 10, length: 5, precision: 2 })
// Returns an array of 5 floating-point numbers, each between 0 and 10, rounded to 2 decimal places
```
<br />

`.intArray(IntArrayArgs)`
Generates an array of random integers. You can define the length of the array, and the min/max integer values.

**Arguments**:
```ts
interface IntArrayArgs {
  max?: number    // Default: 100
  min?: number    // Default: 0
  length?: number // Default: 1
}
```

**Example Usage**:
```ts
RandomNumber.intArray({ min: 1, max: 10, length: 4 })
// Returns an array of 4 random integers between 1 and 10
```
<br />

### Type Definitions
- `IntArgs`: Defines the range for integer generation.
- `FloatArgs`: Defines the range and precision for floating-point numbers.
- `FloatArrayArgs`: Defines the range, precision, and length for arrays of floating-point numbers.
- `IntArrayArgs`: Defines the range and length for arrays of integers.
