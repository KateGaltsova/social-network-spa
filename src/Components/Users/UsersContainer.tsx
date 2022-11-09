import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followSuccess,
    UsersStateType,
    setUsers,
    unfollowSuccess,
    UserType,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, toggleIsFollowingProgress, getUsersThunkCreator, followTC, unfollowTC
} from "../../Redux/users-reducer";
import {ReduxStateType} from "../../Redux/redux-store";
import axios from "axios";
import Preloader from "../Common/Preloader/Preloader";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users: UsersStateType
    isAuth: boolean
    // pageSize: number
    // totalUsersCount: number
    // currentPage: number
}

type mapDispatchToPropsType = {

    followTC: (userID: number) => void
    unfollowTC: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: any
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.users.currentPage, this.props.users.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.users.pageSize)
    }

    render() {
        return <>
            {this.props.users.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.users.totalUsersCount}
                   pageSize={this.props.users.pageSize}
                   currentPage={this.props.users.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollowTC}
                   follow={this.props.followTC}
                   toggleIsFetching={this.props.toggleIsFetching}
                   toggleIsFollowingProgress={this.props.users.followingInProgress}
                   isAuth={this.props.isAuth}
            />
        </>
    }
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        users: state.users,
        isAuth: state.auth.isAuth
        // pageSize: state.users.pageSize,
        // totalUsersCount: state.users.totalUsersCount,
        // currentPage: state.users.currentPage
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    followTC,
    unfollowTC,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsersThunkCreator
})(UsersAPIComponent);