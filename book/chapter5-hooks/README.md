# Chapter 5. React Development with Hooks

Publisher code

https://github.com/PacktPublishing/Full-Stack-React-TypeScript-and-Node/tree/master/Chap5

## Why are class-based components not good enough?

- Does not provide good code reuse.

  - We cannot easily extract out or share logic from a lifecycle event method and then reuse it in some other class component since it's a class than relies on class inheritance.

- In `setState()`, State changing does not happen immediately as it's controlled by the React system

- setState() in a component with a render method is not performant. It's more preferable to share the state of a component using props - state properties that have been passed down to a child component. When state changes, rather than rerender the entire UI, a reconciliation process determines that just what is needed will change.

- Lifecycle methods are complicated.

## What are hooks, and why are they better than class-based?

- React hooks are used in functional components. This means they are more flexible as they don't need to be used in a certain way/in a certain component.

- Rather than receiving functionality as an inheritance from some parent class, we are simply combining functional components, sort of like Lego peices to design our screens.

- Hooks are JavaScript functions that provide certain capabilities to the component.

- Examples of Hooks:
  - `[foo, setFoo] = useState(value)`
    - returning the use of a state variable, and the mutation/setter
  - `useEffect(() => {}`
    - Triggered after drawing to screen finishes, and used to update state objects.
    - Good example, access to network data and then update state.
    - Can have many implementations each responsbile for doing something unique.
    - Similar to `componentDidMount`/`componentDidUpdate`
    - pass an empty array as parameter to force it to only run once
  - `useCallback`
    - A memory saving device, to create an instance of a function after a set of parameters has changed. Otherwise, a function is created on each render.
  - `useReducer((rdcr, initialState) => {})`
    - When you have a single complex state object with multiple properties that need to be updated. Works similar to React Redux
  - `useContext()`
    - A way of having global state that can be shared accross components
  - `useRef`
    - Hold a value in the current property, and doesn't trigger a re-render if the value changes. E.g holding a DOM element because it might be required to opt out of the standard state-driven React model to access the HTML directly.
    - Exists as long as the component lives.

## What is the purpose of a Typescript Generic eg. `React.Component<GreetingProps>`

Explitly specifying that the React component will accept Props and State and should adhere to the contract containing specified properties.

## What is the purpose of an interface used in the practical? Do they exist just in Typescript?

In OOP, an `interface` shows only the signature of a type as opposed to its internal workins. An interface is sometimes called a contract.

An interface allows for a single structure across objects but to enable different implementations so it provides strict rules about what type the structure is

## Practicals with

- Create 'Hello Component' in `class-components`
