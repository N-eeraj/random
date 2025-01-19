# RandomString

The `RandomString` class provides six static methods to generate random strings based on the provided arguments. You can use these methods to generate random lower, upper or both case letters & alphanumerics.

### Usage
```ts
import RandomString from "@n-eeraj/random/RandomString"
```

### Methods

`.upperCase(stringLength)`
Generates a random string of uppercase letters of the specified length.

**Example Usage**:
```ts
RandomString.upperCase(5)
// Returns a string of 5 random uppercase letters
```
<br />

`.lowerCase(stringLength)`
Generates a random string of lowercase letters of the specified length.

**Example Usage**:
```ts
RandomString.lowerCase(4)
// Returns a string of 4 random lowercase letters
```
<br />

`.letters(stringLength)`
Generates a random string of letters (both uppercase and lowercase) of the specified length.

**Example Usage**:
```ts
RandomString.letters(6)
// Returns a string of 6 random letters, mixed uppercase and lowercase
```
<br />

`.alphaNum(stringLength)`
Generates a random alphanumeric string (letters and numbers) of the specified length.

**Example Usage**:
```ts
RandomString.alphaNum(8)
// Returns a string of 8 random alphanumeric characters
```
<br />

`.from(sourceString, stringLength, Options)`
Generates a random string of the specified length using characters from a given from string, with optional inclusion of lowercase, uppercase, and numeric characters.
`stringLength` is optional if no options are provided and will default to the `sourceString` length.

**Arguments**:
```ts
interface Options {
  lower?: boolean  // Default: false
  upper?: boolean  // Default: false
  number?: boolean // Default: false
}
```

**Example Usage**:
```ts
RandomString.from("abc123", 12, {
  upper: true,
  number: true,
})
// Returns a string of 12 random characters from the base "abc123", with uppercase and numeric characters included
```
<br />

`.shuffle(string, mixCount)`
Returns a shuffled version of the provided string. Mix count is an optional argument, it dictates how much times the random swapping should take place.

**Example Usage**:
```ts
RandomString.shuffle("hello world", 3)
// Returns a string with same character after shuffling random indices 3 times
```
