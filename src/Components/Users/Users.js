import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/image/user.png";
import {Link} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i === 5) break;
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(items => <div key={items.id}>
            <span>
                <div>
                    <Link to={'/profile/' + items.id}>
                    <img src={items?.photos?.small ? items.photos.small : userPhoto}
                         className={s.userPhoto}/>
                        </Link>
                </div>
                <div>
                    {items.followed ? <button className={s.button} onClick={() => {
                            props.unfollow(items.id)
                        }}> unfollow </button>

                        : <button className={s.button} onClick={() => {
                            props.follow(items.id)
                        }}> Follow </button>}
                </div>
            </span>

            <span>
                <span>
                    <div>{items.name}</div>
                    <div>{items.status}</div>
                </span>

                <span>
                    <div>{items.id}</div>
                    <div>{items.followed}</div>
                </span>

            </span>
        </div>)};
    </div>
}

export default Users;
