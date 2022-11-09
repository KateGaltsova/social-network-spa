import React from "react";
import  s from './News.module.css'
import {Navigate} from "react-router-dom";

const News = (props: any) => {

    if (!props.isAuth)  return <Navigate to={"/login"}/>
    return (
        <div>
            News
        </div>
    )
}

export default News;