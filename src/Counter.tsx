import React from "react";

const initialState = { count: 0 };
export type CounterProps = {
    label?: string,
    count: number,
    // onCounterIncrease: (event: React.MouseEvent<HTMLElement>) => void
    onCounterIncrease: (isShift: boolean) => void

};
// export type CounterState = { count: number };
export type CounterState = Readonly<typeof initialState>;

// // Vid7. We don't like to put these type definitions inline prohibiting DRY
// // export class Counter extends Component<{label?: string}> { // <== A generic type
// // Vid 8. `Component` has a second generic; state
// // Vid8. use readonly modifier
// export class Counter extends Component<CounterProps, CounterState> {
//   readonly state: CounterState = initialState;

//     /**
//      * Vid 9: According to event type, add 1 or 10
//      * Takes MouseEvent as parameter and increments by:
//      *  -10 - if shift key is pressed
//      *  -1 - if shift key is not pressed
//      * @param event 
//      */
//     incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
//         const inc: number = event.shiftKey ? 10 : 1;
//         this.setState({ count: this.state.count + inc });
//     };
//     componentDidMount() {
//         if (this.props.start) {
//             this.setState({
//                 count: this.props.start
//             })
//         }
//     }
//   render() {
//     // using object destrucuring the extract the label from the prop
//     const { label = "Count" } = this.props;
//     return (
//       <div>
//         <span title="Count Label">{label}</span>
//             <span id="counter"
//                 title="Current Count"
//                 onClick={this.incrementCounter}
//             >
//           {this.state.count}
//         </span>
//       </div>
//     );
//   }
// }

export const Counter = (
    {
        label = "Count",
        count,
        onCounterIncrease
    }: CounterProps) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        onCounterIncrease(event.shiftKey);
    };
    return (
        <div
            className="counter"
            onClick={handleClick}
        >
            <span title="Count Label">{label}</span>
            <span id="counter" title="Current Count">
                {count}
            </span>
        </div>
    );
};