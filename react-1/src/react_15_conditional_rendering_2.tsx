interface Props {
    name: string;
    salutation?: boolean
}

const Validator = ({name, salutation}: Props) => {
    return <div>
        <h1>Witaj, {name}</h1>
        {salutation && <strong>Witaj jaśnie Panie</strong>}
    </div>
}

const App = () => {
    return <Validator name='Franciszek' salutation={true} />
}

export { App }