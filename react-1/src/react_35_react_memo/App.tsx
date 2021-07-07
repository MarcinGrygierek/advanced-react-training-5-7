import React from "react";
import { useState } from "react"

interface ListProps {
    items: string[];
}

const List = React.memo(({items}: ListProps) => {
    console.log('Rerender');
    return <ul>
            {items.map(el => <li key={el}>{el}</li>)}
        </ul>
})

// const List = ({items}: ListProps) => {
//     console.log('Rerender');
//     return <ul>
//             {items.map(el => <li key={el}>{el}</li>)}
//         </ul>
// }

const App = () => {
    const [list, setList] = useState(['Lorem', 'Ipsum', 'Dolor']);
    const [value, setValue] = useState<number>(10);

    const generateNumber = () => {
        setValue(Math.random() * 10);
    }

    return <>
        <button onClick={generateNumber}>Random</button>
        <List items={list} />
    </>
}

export { App }