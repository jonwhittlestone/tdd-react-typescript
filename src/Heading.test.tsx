import React from 'react';import { render } from "@testing-library/react";
import App from "./App";
import { Heading } from "./Heading";


// test('generates a label', () => {
//   const result = label('react');
//   expect(result).toEqual('Hello REACT');
// });

test("renders heading", () => {
  const { getByText } = render(<Heading></Heading>);
  const linkElement = getByText(/hello jonny typescript/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders heading with argument", () => {
  const { getByText } = render(<Heading name={`Jon`} />);

  const linkElement = getByText(/hello jon/i);
    expect(linkElement).toBeInTheDocument();
})
