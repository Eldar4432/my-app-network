import React from 'react'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Serrings/Serrings";
import UsersContainer from "./Components/Users/UsersContainer";

const Routers = () => {
    return(
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={() => <DialogsContainer />}/>
                    <Route path="/profile" element={ () => <Profile />}/>
                    <Route path="/news" exact element={<News/>}/>
                    <Route path="/music" exact element={<Music/>}/>
                    <Route path="/settings" exact element={<Settings/>}/>
                    <Route path="/users" exat element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Routers;