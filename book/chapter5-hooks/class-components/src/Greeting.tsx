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
            message: Greeting.getNewMessage(props.name)
        }
    }

    state: GreetingState;

    /**
     * This function must always return a state object
     * @param props 
     * @param state 
     * @returns 
     */
    static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
        console.log({ props }, { state });
        if (props.name && props.name !== state.message) {
            const newState = { ...state };
            newState.message = Greeting.getNewMessage(props.name);
            return newState;
        }
        return state;
    }

    static getNewMessage(name: string = "") {
        return `Hello from, ${name}`;
    }

    render() {
        if (!this.props.name) {
            return <div>no name given</div>;
        }
        return <div>{this.state.message}</div>
    }
}