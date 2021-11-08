import React from "react";

interface GreetingProps {
    name?: string
}

interface GreetingState {
    message: string
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
    constructor(props: GreetingProps) {
        super(props);
        this.state = {
            message: `Hello from, ${props.name}`
        }
    }

    static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
        console.log(props, state);
        return state;
    }
    render() {
        if (!this.props.name) {
            return <div>no name given</div>;
        }
        return <div>{this.state.message}</div>
    }
}