export enum MyNameAction {
    OFFSET_UPDATE = "OFFSET_UPDATE"
}

export interface OffsetUpdate {
    type: MyNameAction.OFFSET_UPDATE,
    payload: number
}


export const updateOffset = (value: number): OffsetUpdate => ({
    type: MyNameAction.OFFSET_UPDATE,
    payload: value
})