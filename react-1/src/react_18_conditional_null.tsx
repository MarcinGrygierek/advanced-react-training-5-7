interface Props {
    age: number
}

const Validator = ({age}: Props) => {
    if(age < 18) return null;
    return <h1>Masz {age} lat. Możesz wejść.</h1>
}

const App = () => {
    return <Validator age={19} />
}

export { App }