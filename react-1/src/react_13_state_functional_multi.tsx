import { useState } from "react"

interface User {
    id: number;
    name: string;
    email: string;
    tel: string;
}

const App = () => {
    const [val, setVal] = useState<User>({
        id: 1,
        name: 'Marcin',
        email: 'mg@mail.com',
        tel: '123123123'
    });

    const generateNumber = () => {
        const number = Math.round(Math.random() * 900000000 + 100000000);
        setVal(prevVal => ({
            ...prevVal,
            tel: number.toString()
        }));
    }

    return <>
        <h1>{val.tel}</h1>
        <button onClick={generateNumber}>Losuj</button>
    </>
}

export { App }