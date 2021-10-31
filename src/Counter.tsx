import React, { Component } from "react";

export type CounterProps = { label?: string };


// We don't like to put these type definitions inline prohibiting DRY
//export class Counter extends Component<{label?: string}> { // <== A generic type
export class Counter extends Component<CounterProps> { // <== A generic type
  render() {
    // using object destrucuring the extract the label from the prop
    const { label = "Count" } = this.props;
    return (
      <div>
        <span title="Count Label">{label}</span>
        <span id="counter" title="Current Count">
          1
        </span>
      </div>
    );
  }
}