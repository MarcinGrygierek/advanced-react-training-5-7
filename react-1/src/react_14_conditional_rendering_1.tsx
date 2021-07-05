interface Props {
    age: number
}

const Validator = ({age}: Props) => {
    if(age < 18) return <h1>Masz za mało lat aby wejść dalej.</h1>
    return <h1>Masz {age} lat. Możesz wejść.</h1>
}

const App = () => {
    return <Validator age={19} />
}

export { App }