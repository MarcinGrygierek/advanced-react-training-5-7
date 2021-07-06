import { ChangeEvent, useState } from "react"

interface FormValues {
    name: string;
    password: string;
    passwordRepeat: string;
}

const Form = () => {
    const [values, setValues] = useState<FormValues>({
        name: '',
        password: '',
        passwordRepeat: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    return <form>
        <input type='text' name='name' value={values.name} onChange={handleChange} />
        <input type='password' name='password' value={values.password} onChange={handleChange} />
        <input type='password' name='passwordRepeat' value={values.passwordRepeat} onChange={handleChange} />
    </form>
}

const App = () => {
    return <Form />
}

export { App };