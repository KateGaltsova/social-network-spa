//import {ActionTypes, ProfilePageType, PostType} from "./State";
//import {sendMessageCreator, updateNewMessgeBodyCreator} from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export type setUserDataACType = ReturnType<typeof setAuthUserData>
export type ActionTypeProfile = setUserDataACType

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    photos: UsersLocationType
}

export type UsersLocationType = {
    small: string
    large: string
}

export type UsersStateType = {
    userId: null
    email: null
    login: null
    isAuth: boolean
}


let initialState: UsersStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (
    state: UsersStateType = initialState,
    action: ActionTypeProfile
): UsersStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }

}

export const setAuthUserData = (userId: null, email: null, login: null) => {
    return {
        type: "SET_USER_DATA",
        data: {userId, email, login}
    } as const
}


export default authReducer;
