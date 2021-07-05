import { useState } from "react"

const App = () => {
    const [val, setVal] = useState<number>(0);

    const generateNumber = () => {
        const number = Math.round(Math.random() * 1000);
        setVal(number);
    }

    const increaseNumber = () => {
        setVal(prevVal => prevVal + 1);
    }

    return <>
        <h1>{val}</h1>
        <button onClick={generateNumber}>Losuj</button>
        <button onClick={increaseNumber}>Losuj</button>
    </>
}

export { App }