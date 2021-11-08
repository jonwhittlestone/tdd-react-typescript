# react-typescript-tdd

See: [webstorm guide](https://www.jetbrains.com/webstorm/guide/tutorials/react_typescript_tdd/project_setup/)

Learn with video > make own TODOs/notes > article

The overal principle of TDD this way is to prove through the Jest test in node that the funcionality works. Then firing up a browser to do a visual smoke test.

This is much more zen. No `console.log`s everywhere (-:

---

## Notes

### Video 8

Create failing test for starting at zero, toHaveTextContent() and make it pass for completing implementation.

- Counter state as well as props to be modeled with a type definition

- Using a class variable in the implementation doesn't give us type safety. How to get type safety (to actively get editor to give us a red squiggly if we try to use `setState` when we should't) from state that's readonly? Specify the initial state as not being assignable with `Readonly` and the `readonly` modifier. So if we try to assign to a readonly value, we can get the editor to give us a compile error.

- To allow parent component (the 'consumer') to specify a different starting count value, and can pass in as a prop. So add in as optional `start?: number`

- get tests to pass with a lifecycle method in implementation `ComponentDidMount`

### Video 9

Event handling of the stateful class component, writing tests first using a simulated browser to click to add 1 or shift click to add 10

- Write failing test - increment the counter by one - using `firstEvent.click(el)`

- test is failing so to pass, add the click handler in the implementation (Do not use arrow function in `render()` but a prop that points to an arrow func)

- the event argument should have a type of `React.MouseEvent` that has a generic that has information about the event, `<HTMLElement>` representing the thing that was clicked on. Use the compiler to show unsafe assignments of a ternary.

- For testing of complex behaviours (shift key) add and use in new test `user-event`
  - https://github.com/testing-library/user-event

### Video 10 [code](https://github.com/JetBrains/jetbrains_guide/tree/main/sites/webstorm-guide/demos/tutorials/react_typescript_tdd/presentation_components/src)

Embracing React pattern of presentational component through refactor

- Move state out of class-based component into functional component and adjust test to adhere to the contract (where `<Counter>` now accepts a `count` prop)

- the handler can be mocked using the "spy" `jest.fn()` and assertions can be made about it. E.g `expect(handler).toBeCalledWith(1)`

- Slim the interface down. To determine if shift is presesd, "override" the handler prop by finding out if shift was pressed first inside the `Counter` handler which can then invoke the handler in the prop. This means information about 'shift true/false` can just be passed back to the parent.

TODO. Update the container: Convert `App` into a class based component where the state is managed that passes into `<Counter />`
