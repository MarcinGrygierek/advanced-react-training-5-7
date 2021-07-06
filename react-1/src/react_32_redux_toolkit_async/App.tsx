import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux"
import { getMyIP, updateOffset } from "./features/my-name/my-name-slice";
import store, { RootState } from "./store"

const MyName = () => {
    const name = 'Marcin';

    const dispatch = useDispatch();
    const {offset, ip, loading} = useSelector((state: RootState) => state.myName);

    useEffect(() => {
        dispatch(getMyIP());
    }, [])

    const increment = () => {
        dispatch(updateOffset(offset + 1));
    }

    const decrement = () => {
        dispatch(updateOffset(offset - 1));
    }

    return <>
        <small>{loading ? 'Trwa ładowanie ' : ip}</small>
        <h1>{name.slice(0, offset)}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </>
}


const App = () => {
    return <Provider store={store}>
        <MyName />
    </Provider>
}

export {App}