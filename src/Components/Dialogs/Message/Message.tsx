import React from "react";
import s from './../Dialogs.module.css'

const Message = (props: any) => {
    return <div className={s.dialogs}>{props.message}</div>
}

export default Message;