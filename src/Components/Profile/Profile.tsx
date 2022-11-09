import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";


// type ProfilePropsType = {
//     store: Store<ReduxStateType, ActionTypes>
// }

const Profile = (props: ProfileContainerPropsType) => {

    //if (!props.isAuth)  return <Navigate to={"/login"}/>

    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} />
            <MyPostsContainer />
    </div>
    )
}

export default Profile