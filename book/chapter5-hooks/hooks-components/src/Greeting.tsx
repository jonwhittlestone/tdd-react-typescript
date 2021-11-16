import React, { FC, useState, useEffect } from 'react';
interface GreetingProps {
    name?: string
}
/**
 * The return value of this function is the call
 * to `render()` that we'd usually have in a class component
 * @param param0
 * @returns 
 */
const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {
    const [message, setMessage] = useState("");

    /**
     * Runs after drawing to the screen finishes.
     */
    useEffect(() => {
        if (name) {
            setMessage(`Hello from, ${name}`);
        }
    // As below: Updates the `message` state property whenever
    // `name` prop updates since it's passes as a param
    // to the useEffect function.
    }, [name])

    if (!name) {
        return <div>no name given</div>;
    }

    return <div>{message}</div>;
}
export default Greeting;