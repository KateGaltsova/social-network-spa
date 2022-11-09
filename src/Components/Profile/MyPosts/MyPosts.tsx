import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts = (props:MyPostsType) => {

    let postsElements =
        props.posts.map( (p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddNewPostForm = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;