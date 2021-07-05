interface Props {
    age: number
}

const Validator = ({age}: Props) => {
    return <div>
        <h1>Klub sportowy Legia Warszawa</h1>
        <h2>{age < 18 
            ? 'Masz za mało lat, nie możesz wejść dalej.' 
            : `Masz ${age} lat. Możesz wejść.`}
        </h2>
    </div>
}

const App = () => {
    return <Validator age={19} />
}

export { App }