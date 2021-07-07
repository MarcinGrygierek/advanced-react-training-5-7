import { useReducer } from "react"

enum FooAction {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}

type FooState = {
    offset: number
}

interface Increment {
    type: FooAction.INCREMENT,
    payload: number
}

interface Decrement {
    type: FooAction.DECREMENT,
    payload: number
}

type Action = 
    | Increment
    | Decrement

const initialState: FooState = {
    offset: 1
}

const fooReducer = (state: FooState, action: Action) => {
    switch(action.type) {
        case FooAction.INCREMENT: {
            return {...state, offset: state.offset + action.payload}
        }
        case FooAction.DECREMENT: {
            return {...state, offset: state.offset - action.payload}
        }
    }
}

const Foo = () => {
    const [state, dispatch] = useReducer(fooReducer, initialState);
    const name = "Marcin";

    return <>
    <h1>{name.slice(0, state.offset)}</h1>
    <button onClick={() => dispatch({type: FooAction.INCREMENT, payload: 1})}>+1</button>
    <button onClick={() => dispatch({type: FooAction.DECREMENT, payload: 1})}>-1</button>
</>
}

const App = () => {
    return <Foo />
}

export { App }