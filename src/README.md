### Usage
```ts
import {
  randomBoolean,
  randomBooleanArray,
  randomUUID,
  randomUUIDArray,
} from "@n-eeraj/random"
```

### Exported Functions

`randomBoolean()`
Generates a random boolean value.

**Example Usage**:
```ts
randomBoolean()
// Returns a random boolean
```
<br />

`randomBooleanArray(length)`
Generates an of random boolean values.

**Example Usage**:
```ts
randomBooleanArray(5)
// Returns an array of 5 random booleans
```
<br />

`randomUUID()`
Generates a random UUID using `crypto.randomUUID()`.

**Example Usage**:
```ts
randomUUID()
// Returns a random UUID
```
<br />

`randomUUIDArray(length)`
Generates an of random UUID using `crypto.randomUUID()`.

**Example Usage**:
```ts
randomUUIDArray(5)
// Returns an array of 5 random UUIDs
```
<br />

> Read more about [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID).
