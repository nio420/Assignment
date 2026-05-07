# Generics in TypeScript – Writing Flexible and Reusable Code

## Introduction
When you start working with TypeScript, you quickly realize that one of the main goals is to keep your code both reusable and type-safe at the same time. At first, this can feel a bit difficult because different situations often require different types, and writing separate functions for each type becomes repetitive very quickly. This is exactly the problem Generics solve in TypeScript.

## What are Generics?
Generics allow us to write functions, classes, or interfaces that can work with different types while still keeping full type safety. Instead of fixing a type like string or number inside a function, we use a placeholder type that can adapt based on what is passed in. This makes the code flexible but still strictly typed.

## Simple Example
A basic example of a generic function looks like this. We create a function that takes a value and returns the same value, but instead of fixing the type, we use a generic type parameter. This is written using "<T>", where T represents any type that will be decided when the function is used. So if we pass a number, TypeScript understands it as a number, and if we pass a string, it understands it as a string.

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const text = identity<string>("Hello");
In this example, the same function works for both numbers and strings without losing type safety.


## Why Generics are useful?

Without generics, we would need to write separate functions for different types, such as one function for strings and another for numbers. This quickly leads to repeated code and makes the project harder to maintain. Generics solve this problem by allowing us to write one function that works for all types.


## Generics with Arrays...

Generics are also very useful when working with arrays. For example, we can create a function that returns the first element of any array, no matter what type it contains. By using generics, we ensure that the function always returns the correct type that matches the input array.


### Conclusion

Generics are one of the most powerful features in TypeScript because they allow us to build reusable logic without sacrificing type safety. Once you understand how generics work, you start writing cleaner and more scalable code that fits real-world development patterns. They are widely used in modern frameworks and APIs, so mastering them is an important step toward becoming a stronger TypeScript developer.

