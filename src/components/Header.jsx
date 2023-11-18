import React from 'react';
import s from './Header.module.css';
import tre from './../assets/tre.jpg'

const Header = () => {
  return (
    <div className={s.container} > 

        <div className={s.img_container}>
            <img src={tre} />
        </div>

        <div className={s.tex}>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto error accusamus natus tenetur veniam voluptatibus dolorum autem porro, eveniet animi dicta repellendus hic nobis magnam perspiciatis repudiandae quo itaque?</p>
        </div>

    </div>
  )
}

export default Header