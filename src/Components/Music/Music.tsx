import React from "react";
import  s from './Music.module.css'
import {Navigate} from "react-router-dom";

const Music = (props: any) => {

    if (!props.isAuth)  return <Navigate to={"/login"}/>
    return (
        <div>
            Music
        </div>
    )
}

export default Music;