import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

export type HeaderContainerPropsType = {
    setAuthUserData: any
}

type mapStateToPropsType = {

}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);