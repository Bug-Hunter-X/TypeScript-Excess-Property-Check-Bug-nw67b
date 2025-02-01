# TypeScript Excess Property Check Bug

This repository demonstrates a common TypeScript error related to excess property checks.  When you define a function that expects an object with specific properties, providing an object with additional properties will cause a compile-time error.

## The Bug

The `bug.ts` file contains a function `printCoordinates` that expects an object with `x` and `y` properties.  However, the object passed to the function contains an extra `z` property, leading to a type error.

## The Solution

The `bugSolution.ts` file demonstrates two approaches to solve this issue:

1. **Using Type Assertion:**  A type assertion explicitly tells TypeScript to ignore the excess properties, however, this can be risky. 
2. **Using Type Guards:**  This approach will provide a more robust solution to solve the issue.

This example showcases the importance of careful type handling in TypeScript to prevent unexpected runtime errors.