import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/206853.png";
import {UsersPropsType} from "./UsersContainer";
import {toggleIsFollowingProgress, UsersStateType} from "../../Redux/users-reducer";
import {Navigate, NavLink} from "react-router-dom";
import axios from "axios";


type PropsType = {
    totalUsersCount:  number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersStateType
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: any
    isAuth: boolean
}

let Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.users.totalUsersCount / props.users.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i) }

    if (!props.isAuth)  return <Navigate to={"/login"}/>

    return  <div>
        <div>
            {pages.map((p) => {

                return <span className={props.users.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e)=>{ props.onPageChanged (p) }}>{p}</span>
            })}
        </div>

        {
            props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.users.followingInProgress.some(id=> id===u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

                            : <button disabled={props.users.followingInProgress.some(id=> id===u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;