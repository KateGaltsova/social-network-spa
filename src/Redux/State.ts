// import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
// import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
//
// export type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// type DialogType = {
//     id: number
//     name: string
// }
//
// type MessageType = {
//     id: number
//     message: string
// }
//
// export type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
//
// type DialogsPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageBody: string
// }
//
// type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// export type StoreType = {
//     _state: RootStateType
//     getState: () => RootStateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionTypes) => void
// }
//
// export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTaxtAC> |
//     ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>
//
let store = ""
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It's my first post", likesCount: 11},
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Nikita'},
//                 {id: 2, name: 'Lesya'},
//                 {id: 3, name: 'Vika'},
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How is your day?"},
//                 {id: 3, message: "Sweet"},
//             ],
//             newMessageBody: ""
//         },
//     },
//     _callSubscriber() {
//
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action: ActionTypes) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber();
//     }
// }
// let a = {...store._state.profilePage, posts: [...store._state.profilePage.posts]}
// let b = {...store._state.dialogsPage, dialogs: [...store._state.dialogsPage.dialogs], messages: [...store._state.dialogsPage.messages]}
//
export default store