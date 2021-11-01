# react-typescript-tdd

Inspired by webstorm guide

Learn with video > make own TODOs/notes > article

## Video 8

Create failing test for starting at zero, toHaveTextContent() and make it pass for completing implementation.

- Counter state as well as props to be modeled with a type definition

- Using a class variable in the implementation doesn't give us type safety. How to get type safety (to actively get editor to give us a red squiggly if we try to use `setState` when we should't) from state that's readonly? Specify the initial state as not being assignable with `Readonly` and the `readonly` modifier. So if we try to assign to a readonly value, we can get the editor to give us a compile error.

- To allow parent component (the 'consumer') to specify a different starting count value, and can pass in as a prop. So add in as optional `start?: number`

- get tests to pass with a lifecycle method in implementation `ComponentDidMount`
