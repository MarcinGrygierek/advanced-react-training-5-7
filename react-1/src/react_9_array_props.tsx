interface User {
    name: string;
    id: number;
}

interface Props {
   items: User[];
}

const Hello = ({items}: Props) => {
    return <ul>
        {items.map(el => <li key={el.id}>{el.name}</li>)}
    </ul>
}

const App = () => {
    return <Hello items={[
        { name: 'lorem', id: 1}, 
        {name: 'ipsum', id: 2},
         {name: 'dolor', id:3}
        ]} />
}

export { App };