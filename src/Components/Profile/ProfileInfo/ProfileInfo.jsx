import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Users/preloader";
const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://images.pexels.com/photos/3390729/pexels-photo-3390729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>

            <div className={s.avadog}>
                <img src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'></img>
                <img src={props?.profile?.photos?.large}/>
                Ava + Description
            </div>
        </div>
    );
};

export default ProfileInfo;