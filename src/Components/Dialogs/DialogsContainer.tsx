import React from "react";
import {DialogsPageType, sendMessageAC} from "../../Redux/dialogs-reducer";
import {compose, Dispatch, Store} from "redux";
import {ReduxStateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthNavigate from "../../hoc/NavigateToLogin";

export type DialogDataType = {
    id: number
    title: string
}

type MapStateToPropsType = {

    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {

    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {

        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthNavigate
)(Dialogs);