import { useForm } from "./hooks/useForm"

interface FormValues {
    name: string;
    password: string;
    passwordRepeat: string;
}

const Form = () => {
    const [values, handleChange] = useForm<FormValues>({
        name: '',
        password: '',
        passwordRepeat: '',
    });

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