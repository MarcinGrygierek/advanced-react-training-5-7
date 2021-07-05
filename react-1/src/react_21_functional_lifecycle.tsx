import { useEffect } from "react"

interface Props {
    name: string;
}

const LifeCycleTester = ({name}: Props) => {
    useEffect(() => {
        console.log('Mounted');

        return () => {
            console.log('Will be unmounted')
        }
    }, []);

    useEffect(() => {
        console.log('Updated', name);
    }, [name])

    return <h1>{name}</h1>
}

const App = () => {
    return <LifeCycleTester name="Lorem" />
}

export { App }