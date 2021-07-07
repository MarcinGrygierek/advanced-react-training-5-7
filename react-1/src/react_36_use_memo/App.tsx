import { useMemo, useState } from "react";

const veryHeavyFunction = (n: number) => {
    console.log('Another rerender!');
    return Math.pow(n, 8);
}

const CalculateTest = () => {
    const [val, setVal] = useState(1);
    const [random, setRandom] = useState(0);

    const heavyNumber = useMemo(() => veryHeavyFunction(val), [val]);

    const handleClick = () => {
        setRandom(Math.random());
    }

    return <>
        <h1>{heavyNumber}</h1>
        <button onClick={handleClick}>Generate</button>
    </>

}

const App = () => {
    return <CalculateTest />;
}

export { App }