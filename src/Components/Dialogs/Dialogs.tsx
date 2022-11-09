import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";

export type DialogDataType = {
    id: number
    title: any
}


type DialogsType = {
    dialogsPage: DialogsPageType;
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    newMessageBody: any
}


const Dialogs = (props: DialogsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    //if (!props.isAuth)  return <Navigate to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type AddMessageFormDataType = {
    newMessageBody: string
}

const AddMessageForm = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;