# Chapter 5. React Development with Hooks

Publisher code

https://github.com/PacktPublishing/Full-Stack-React-TypeScript-and-Node/tree/master/Chap5

## Why are class-based components not good enough?

- Does not provide good code reuse
- In `setState()`, State changing does not happen immediately as it's controlled by the React system
- setState() in a component with a render method is not performant. It's more preferable to share the state of a component using props - state properties that have been passed down to a child component. When state changes, rather than rerender the entire UI, a reconciliation process determines that just what is needed will change.
- Lifecycle methods are complicated.

## What are the benefits of React Hooks?

## What is the purpose of a Typescript Generic eg. `React.Component<GreetingProps>`

Explitly specifying that the React component will accept Props and State and should adhere to the contract containing specified properties.

## What is the purpose of an interface used in the practical? Do they exist just in Typescript?

In OOP, an `interface` shows only the signature of a type as opposed to its internal workins. An interface is sometimes called a contract.

An interface allows for a single structure across objects but to enable different implementations so it provides strict rules about what type the structure is

## Practicals

TODO. Create a class component - Get type safety by creating expect types for props and state. It has a constructor where there's a call to the base class constructor (`super(props)`) so it 'reacts' when props change.
It uses the static lifecycle method `getDerivedStateFromProps` which returns a state object
