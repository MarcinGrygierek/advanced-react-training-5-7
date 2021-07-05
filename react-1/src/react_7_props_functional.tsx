interface Props {
    name: string;
    age: number;
    salutation?: string;
}

// const Hello = (props: Props) => {
//     return <h1>{props.salutation} {props.name}, lat {props.age}</h1>
// }

// const Hello = (props: Props) => {
//     const {salutation, name, age} = props;
//     return <h1>{salutation} {name}, lat {age}</h1>
// }

const Hello = ({salutation, name, age}: Props) => {
    return <h1>{salutation} {name}, lat {age}</h1>
}

const App = () => {
    return <Hello name='Marcin' age={25} />
}

export { App };