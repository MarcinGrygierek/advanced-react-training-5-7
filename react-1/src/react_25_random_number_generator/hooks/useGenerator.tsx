import { useEffect, useState } from "react";

export function useGenerator() {
    const [values, setValues] = useState<number[]>([]);

    const getRandomNumber = () => {
        return Math.round(Math.random() * 100);
    }

    const generate = () => {
        const arr = [];
        for(let i = 0; i < 5; i++) {
            arr.push(getRandomNumber());
        }
        setValues(arr);
    }

    const addNewValue = () => {
        setValues(prevValues => [...prevValues, getRandomNumber()])
    }

    useEffect(() => {
        generate();

        const interval = setInterval(() => {
            addNewValue()
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return {
        values,
        generate
    }
}