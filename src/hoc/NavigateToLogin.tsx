import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {ReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function withAuthNavigate<T>(Component: ComponentType<T>) {
    return connect(mapStateToProps)((props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={"/login"}/>
        return <Component {...restProps as T}/>
    })
}

export default withAuthNavigate;