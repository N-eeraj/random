# RandomList

The `RandomList` class provides two static methods to handle a few random array operations.

### Usage
```ts

import RandomList from "@n-eeraj/random/RandomList"
```

### Methods

`.choice(array)`
Selects a random element from the provided array.

**Example Usage**:
```ts
const options = [1, 2, "abc", { x: 5 }]
RandomList.choice(options)
// Returns one random element from the options array
```
<br />

`.shuffle(array, mixCount)`
Returns a shuffled version of the provided array. Mix count is an optional argument, it dictates how much times the random swapping should take place.

**Example Usage**:
```ts
const array = [1, 2, "abc", { x: 5 }]
RandomList.shuffle(array, 3)
// Returns an array with same elements after shuffling random indices 3 times
```
