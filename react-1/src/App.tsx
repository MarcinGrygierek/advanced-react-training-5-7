import { useState } from "react"

interface Props {
    defaultName: string;
}

const UserInfo = ({defaultName}: Props) => {
    const [name, setName] = useState<string>(defaultName);

    return <h1>Jestem {name}</h1>
}

const App = () => {
  

    return <UserInfo defaultName='Marcin' />
}

export { App }