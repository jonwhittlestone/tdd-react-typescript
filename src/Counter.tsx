import React, { Component } from "react";

const initialState = { count: 0 };
export type CounterProps = { label?: string, start?:number };
// export type CounterState = { count: number };
export type CounterState = Readonly<typeof initialState>;


// Vid7. We don't like to put these type definitions inline prohibiting DRY
// export class Counter extends Component<{label?: string}> { // <== A generic type
// Vid 8. `Component` has a second generic; state
// Vid8. use readonly modifier
export class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = initialState;
    componentDidMount() {
        if (this.props.start) {
            this.setState({
                count: this.props.start
            })
        }
    }
  render() {
    // using object destrucuring the extract the label from the prop
    const { label = "Count" } = this.props;
    return (
      <div>
        <span title="Count Label">{label}</span>
        <span id="counter" title="Current Count">
          {this.state.count}
        </span>
      </div>
    );
  }
}