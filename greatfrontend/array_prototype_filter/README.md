https://www.greatfrontend.com/interviews/study/three-months/questions/javascript/array-filter

# Array.prototype.filter Implementation

## Description
`Array.prototype.filter` creates a new array populated with the results of calling a provided function on every element in the calling array.

## Requirements
- For sparse arrays (e.g. `[1, 2, , 4]`), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).
- Implement `Array.prototype.filter` as `Array.prototype.myFilter` to avoid overwriting the actual `Array.prototype.filter` which is being used by the autograder.

## Examples
```javascript
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
```

## Important Notes
The filter callback function takes in more than just the element! There's also a second parameter for `Array.prototype.filter` as well. You are recommended to read the specification for `Array.prototype.filter` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) before attempting.