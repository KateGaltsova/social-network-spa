import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

const Header = (props: HeaderContainerPropsType) => {
    return <header className={s.header}>
        <img
            src='https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/2/2020/06/image3-4-1024x768.png'/>

        <div className={s.loginBlock}>
            { props.setAuthUserData.isAuth ? props.setAuthUserData.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;