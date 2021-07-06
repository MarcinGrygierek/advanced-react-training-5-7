import { MyNameAction, OffsetUpdate } from "../actions/my-name";

export interface MyNameState {
    offset: number
}

const initialState: MyNameState = {
    offset: 1
}

type Action = OffsetUpdate;

export default (state = initialState, action: Action) => {
    switch(action.type) {
        case MyNameAction.OFFSET_UPDATE:
            return {
                ...state,
                offset: action.payload
            }
        default: return state
    }
}