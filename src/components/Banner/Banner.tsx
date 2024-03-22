import React from 'react'
import pikbestImage from '@/assets/banner.jpg'
import style from './Banner.module.css'

const Banner = () => {
  return (
    <div className={`banner-container ${style.bannerContainer}`}>
      <img src={pikbestImage} alt='Pikbest Image' className={`img-fluid ${style.bannerImage}`} />
      <div className={`banner text-center ${style.bannerContent}`}>
        <h1 className='display-4'>Tea Sale!</h1>
        <p className='lead'>Enjoy our premium tea collection</p>
        <button className={` ${style.bannerButton} ${style['banner-button-green']}`}>Shop Now</button>
      </div>
    </div>
  )
}

export default Banner
