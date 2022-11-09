import React from "react";
import s from './ProfileInfo.module.css';
import {UserProfileDataType} from "../../../Redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    userProfile: UserProfileDataType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
        {/*<div>
            <img src='https://theinpaint.com/images/tutorials/online/how-to-remove-tourists-from-photo-3.jpg'/>
        </div>*/}
    <div className={s.descriptionBlock}>
        <img src={props.userProfile?.photos.large}/>
        <ProfileStatus status={"Hello, bitches"}/>
    </div>
</div>
)
}

export default ProfileInfo