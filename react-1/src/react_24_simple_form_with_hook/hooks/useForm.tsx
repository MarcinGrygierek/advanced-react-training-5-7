import { ChangeEvent, useState } from "react";

export function useForm<T>(initialValues: T): [T, (e: ChangeEvent<HTMLInputElement>) => void] {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    return [values, handleChange]
}