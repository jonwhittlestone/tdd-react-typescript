import React from 'react';

// export function label(name: string) {
//   return `Hello ${name.toUpperCase()}`;
// }

type HeadingProps = { name?: string };

export function Heading({name = "Jonny Typescript"}:HeadingProps) {
    return <h1>Hello {name}</h1>;
}
