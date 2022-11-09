

export type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Lesya'},
        {id: 3, name: 'Vika'},
    ],
        messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your day?"},
        {id: 3, message: "Sweet"},
    ],
    newMessageBody: ""
}

type SendMessageACType = ReturnType<typeof sendMessageAC>
export type ActionTypeDialogs =  SendMessageACType

const dialogsReducer = (
    state: DialogsPageType = initialState,
    action: ActionTypeDialogs
): DialogsPageType => {

    switch (action.type) {

        case "SEND_MESSAGE":
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [ ...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND_MESSAGE",
        newMessageBody
    } as const
}



export default dialogsReducer;
