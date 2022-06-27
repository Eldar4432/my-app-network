import React from "react";
import s from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <Link to='/profile' activeClassName={s.activeLink}>Profile</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to='/dialogs' activeClassName={s.activeLink}>Dialogs</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to='/news' activeClassName={s.activeLink}>News</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to='/music' activeClassName={s.activeLink}>Music</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to='/settings' activeClassName={s.activeLink}>Settings</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to='/users' activeClassName={s.activeLink}>Users</Link>
            </div>
        </nav>
    );
};

export default Navbar;