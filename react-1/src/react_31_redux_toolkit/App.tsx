import { Provider, useDispatch, useSelector } from "react-redux"
import { incrementOffset, updateOffset } from "./features/my-name/my-name-slice";
import store, { RootState } from "./store"

const MyName = () => {
    const name = 'Marcin';

    const dispatch = useDispatch();
    const {offset} = useSelector((state: RootState) => state.myName);

    const increment = () => {
        dispatch(incrementOffset(null));
        // dispatch(updateOffset(offset + 1));
    }

    const decrement = () => {
        dispatch(updateOffset(offset - 1));
    }

    return <>
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