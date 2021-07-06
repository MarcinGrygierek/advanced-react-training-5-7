import { Provider, useDispatch, useSelector } from "react-redux";
import { updateOffset } from "./actions/my-name";
import { RootState } from "./reducers";
import { store } from "./store";

const MyName = () => {
    const name = 'Marcin';

    const dispatch = useDispatch();
    const {offset} = useSelector((state: RootState) => state.myName);

    const increment = () => {
        dispatch(updateOffset(offset + 1));
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
    return(
        <Provider store={store}>
            <MyName />
        </Provider>
    )
}

export { App }