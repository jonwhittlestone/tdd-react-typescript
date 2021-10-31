import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { Heading } from "./Heading"


function App() {
  return (
    <div className="container">
      <Heading />
      <Counter label={"Current"}/>
    </div>
  );
}

export default App;
