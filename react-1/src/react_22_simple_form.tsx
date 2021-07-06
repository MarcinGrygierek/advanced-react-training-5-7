import { ChangeEvent, useState } from "react"

const Form = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handlPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handlPasswordRepeatChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordRepeat(e.target.value);
    }

    return <form>
        <input type='text' name='name' value={name} onChange={handleNameChange} />
        <input type='password' name='password' value={password} onChange={handlPasswordChange} />
        <input type='password' name='passwordRepeat' value={passwordRepeat} onChange={handlPasswordRepeatChange} />
    </form>
}

const App = () => {
    return <Form />
}

export { App };