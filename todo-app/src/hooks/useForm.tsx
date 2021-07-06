import { ChangeEvent, FormEvent, useState } from "react";

type AllowedInputs = 
    | HTMLInputElement
    | HTMLTextAreaElement

type FormCallback<T> = (values: T) => void;

interface UseForm<T> {
    values: T;
    handleChange: (e: ChangeEvent<AllowedInputs>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>, callback: FormCallback<T>) => void;
}

export function useForm<T>(initialValues: T): UseForm<T> {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: ChangeEvent<AllowedInputs>) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>, callback: FormCallback<T>) => {
        e.preventDefault();
        callback(values);
        setValues(initialValues);
    }

    return {values, handleChange, handleSubmit}
}