import React from "react";
import {addPostAC, PostType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch, Store} from "redux";
import {ActionTypes, ReduxStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";


type MyPostContainerPropsType = {
    store: Store<ReduxStateType, ActionTypes>
}

type MapStateToPropsType = {
    posts: Array<PostType>

}

type MapDispatchToPropsType = {

    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;