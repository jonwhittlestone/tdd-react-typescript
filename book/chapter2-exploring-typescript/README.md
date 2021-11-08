# Chapter 2 - Exploring Typescript

- O'Reilly Chapter

  - https://learning.oreilly.com/library/view/full-stack-react-typescript/9781839219931/B15508_02_Final_JC_ePub.xhtml

- Typescript Error guide

  - https://typescript-error-guide.netlify.app/?path=/story/*
  - https://github.com/threehams/typescript-error-guide

- Microsoft Typescript handbook
  - https://www.typescriptlang.org/docs/handbook/intro.html

To run a `ts` file

    $ tsc {filename}      # compiler recognise file & transpile

    $ node {filename.js}  # run the outputted js file in node

### What to do when using a 3rd party API and type information isn't well-documented?

- Avoid using `any` but instead, create an interface containing only the fields you know and care ab`out.

### What are generics?

Typescript handbook

- https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics

They allow you to change the return value baased on the arguments. Think of them like function arguments, but for types.
