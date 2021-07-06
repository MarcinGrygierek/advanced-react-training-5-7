import { useGenerator } from "./hooks/useGenerator"

const Generator = () => {   
    const {values, generate} = useGenerator();
    return (
        <div>
            <button onClick={generate}>Generate</button>
            <ul>
                {values.map(val => <li key={val}>{val}</li>)}
            </ul>
        </div>
    )
}

const App = () => {
    return <Generator />
}

export { App }