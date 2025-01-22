# RandomList

The `RandomList` class provides three static methods to handle a few random array operations.

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
<br />

`.sample(array, sampleSize)`
Returns a sample array (sub array) of the provided array of sampleSize length.

**Example Usage**:
```ts
const array = [1, 2, "abc", { x: 5 }]
RandomList.sample(array, 2)
// Returns an array with 2 random elements from the original array
```
