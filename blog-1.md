# Pick and Omit in TypeScript + DRY Principle

## Introduction
In TypeScript, we often work with large interfaces that contain many properties. But sometimes we don’t need all the properties everywhere. Writing new interfaces again and again creates repeated code, which is not efficient. To solve this problem, TypeScript provides utility types like "Pick" and "Omit". These help us follow the DRY (Don’t Repeat Yourself) principle.


## What is Pick?

"Pick" allows us to select only specific properties from an existing interface.

Example:
```ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Only selecting name and email
type UserPreview = Pick<User, "name" | "email">;

const user: UserPreview = {
  name: "John",
  email: "john@example.com",
};
Here, we are not creating a new interface. Instead, we are reusing the existing User interface and picking only required fields.

========================================================================

## What is Omit?

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


type PublicUser = Omit<User, "password">;  // Removing password for public data

const user: PublicUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
};
Here, we reused the same user interface but removed sensitive data like password.


========================================================================

## DRY Principle

The DRY (Don’t Repeat Yourself) principle is a software design principle that states that every piece of knowledge must have a single, unambiguous, authoritative representation within a system. In other words, we should avoid duplicating code or data.


Example:
```ts
interface UserPublic {
  id: number;
  name: string;
  email: string;
}

interface UserPrivate {
  id: number;
  name: string;
  email: string;
  password: string;
}
This creates repetition and increases maintenance work. Instead, we can use Pick and Omit to create a new interface that contains only the required fields.


### Conclusion

Pick and Omit are powerful TypeScript utility types that help us reuse existing interfaces instead of rewriting them. They make our code cleaner, scalable, and easier to maintain. By using them properly, we follow the DRY principle and write more professional TypeScript code.