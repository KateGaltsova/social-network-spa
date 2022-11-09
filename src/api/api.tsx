import axios from "axios";
import {followSuccess, UserType} from "../Redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a5513cb9-5d78-47d3-9f8f-9db61aca3670"
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseGetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID: number) {
        return instance.post<ResponseType>(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    },

    unfollow (userID: number) {
        return instance.delete<ResponseType>(`follow/${userID}`)
    },
    //getProfile(userId:string) {
      //  return profileAPI.getProfile(userId)
    //}
}

export const profileAPI = {

    getProfile(userId:string) {
        return instance.get<ResponseProfileType>(`profile/${userId}`, )
            .then(response => {
                return response.data
            })
    },

    getStatus(userId:string) {
        return instance.get(`status/` + userId)
    },

    updateStatus(status:string) {
        return instance.put(`status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<DataType>>(`auth/me`, )
            .then(response => {
                return response.data
            })
}}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

type ResponseGetUsersType = {
    items: UserType[]
    totalCount: number
    error: string
}

// type ResponseAuthMeType = {
//     data: DataType
//     resultCode: number
//     messages: string[]
// }

type DataType = {
    id: number
    email: string
    login: string
}

type ResponseProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}