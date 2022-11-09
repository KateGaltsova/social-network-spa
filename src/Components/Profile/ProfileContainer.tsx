import React, {useEffect} from "react";
import {compose, Store} from "redux";
import {ActionTypes, ReduxStateType} from "../../Redux/redux-store";
import Profile from "./Profile";

import {connect} from "react-redux";
import {
    getProfileTC,
    getStatusTC,
    PostType,
    setUserProfile,
    updateStatusTC,
    UserProfileDataType
} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hoc/hooks";


export type ProfilePropsType = {
    store: Store<ReduxStateType, ActionTypes>
}

export type ProfileContainerPropsType = {
    userProfile: UserProfileDataType | null
    posts: Array<PostType>
    setUserProfile: (userInfo: UserProfileDataType) => void
    isAuth: boolean
    status: any
}

const ProfileContainer = (props: ProfileContainerPropsType) => {
    const dispatch = useAppDispatch()
    let params = useParams()
    useEffect(() => {
        if (params.userId) {
            dispatch(getProfileTC(params.userId))
            dispatch(getStatusTC(params.userId))

        }

    }, [])


    return (
        <div>
            <Profile {...props} />
        </div>
    )
}

type mapStateToProps = {
    userProfile: UserProfileDataType | null
    posts: Array<PostType>
    isAuth: boolean
    status: string
}

let mapStateToProps = (state: ReduxStateType): mapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        userProfile: state.profilePage.userProfile,
        posts: state.profilePage.posts,
        status: state.profilePage.status
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getStatusTC, updateStatusTC}),
    // withAuthNavigate
)(ProfileContainer)

