import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";

//type AppPropsType = {
  //  store: Store<ReduxStateType, ActionTypes>

//}

const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        {/*<Route path="/profile/:userId"
                        element={<ProfileContainer />}/>*/}
                        <Route path="/profile/"
                               element={<ProfileContainer />}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/users" element={<UsersContainer />}/>
                        <Route path="/login" element={<Login />}/>
                        {/*<Route path="/404" element={<h1>Page not found</h1>}/>*/}
                        {/*<Route path="*" element={<Navigate to={"/404"}/>}/>*/}

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
