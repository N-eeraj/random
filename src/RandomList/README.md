# RandomList

The `RandomList` class provides one static method to handle a few random array operations.

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
