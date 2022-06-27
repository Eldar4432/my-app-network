import React from 'react'
import preleader from "../../assets/image/preloader.gif";

const Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preleader}/>
    </div>
};

export default Preloader;