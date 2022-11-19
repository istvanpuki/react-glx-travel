import React from 'react'
import './HeroImages.css'
import HeroBackground from '../../assets/heroImg.jpg'

const HeroImages = (props) => {
  return (
    <div className='hero-img'style={{   backgroundImage: 'url('+HeroBackground+')',
                                        backgroundSize: "cover",
                                        height: "50vh",
                                        repeat: "no-repeat", }}>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImages