interface Props {
    items: string[];
    click: (name: string) => void;
}

const Hello = ({items, click}: Props) => {
    return <ul>
        {items.map(el => <li key={el} onClick={() => click(el)}>{el}</li>)}
    </ul>
}

const App = () => {
    const handleClick = (name: string) => {
        console.log('Clicked', name);
    }

    return <Hello items={['dolor', 'sit', 'amet']} click={handleClick} />
}

export { App }