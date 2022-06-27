import React from "react";
import s from'./Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjEsqLDUaa285_llBuk6wDyx_rrpxOvye9A&usqp=CAU'></img>
        </header>
    );
};

export default Header;