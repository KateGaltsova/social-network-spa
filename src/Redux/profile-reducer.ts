//import {ActionTypes, ProfilePageType, PostType} from "./State";
//import {sendMessageCreator, updateNewMessgeBodyCreator} from "./dialogs-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

type addPostACType = ReturnType<typeof addPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusACType = ReturnType<typeof setStatusAC>
export type ActionTypeProfile = addPostACType | setUserProfileType | setStatusACType

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileDataType | null
    status: string
}

export type UserProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    userProfile: null,
    status: ""
};

const profileReducer = (
    state: ProfilePageType = initialState,
    action: ActionTypeProfile
): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostType = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            };
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            };
        case "SET_USER_PROFILE":
            return {...state, userProfile: action.userProfile}
        default:
            return state;
    }

}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET_STATUS",
        status: status
    } as const
}
export const setUserProfile = (userProfile: UserProfileDataType) => {
    return {
        type: "SET_USER_PROFILE",
        userProfile
    } as const
}
export const getUserProfile = (userProfile: UserProfileDataType) => {
    return {
        type: "GET_USER_PROFILE",
        userProfile
    } as const
}

export const getStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
                dispatch(setStatusAC(response.data))
            }
        )
    }
}
export const getProfileTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
            dispatch(getUserProfile(response))
        })
}


export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}

export default profileReducer;
