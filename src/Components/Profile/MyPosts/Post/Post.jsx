import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt="ava" />
      {props.name}<br></br>
      <span>like: </span>
      {props.like}
    </div>
  )
}


export default Post