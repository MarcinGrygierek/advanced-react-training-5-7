import React, {useState} from 'react';

interface Props {
    handleClick: (e: any) => void;
}

const Foo = ({handleClick}: Props) => {
    const [items, setItems] = useState<string[]>(['a', 'b', 'c', 'd', 'e']);

    return <ul>{items.map(el => <li onClick={handleClick} key={el}>{el}</li>)}</ul>
}

export default React.memo(Foo);