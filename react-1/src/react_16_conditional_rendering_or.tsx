interface Props {
    name?: string;
}

const Validator = ({name}: Props) => {
    return <div>
        <h1>Witaj, {name || "Nieznajomy"}</h1>
    </div>
}

const App = () => {
    return <Validator />
}

export { App }