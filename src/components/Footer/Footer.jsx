import React from 'react'
import './Footer.css'
import * as Unicons from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="f-content">
        <span>federer.kristijan@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/federerkristijan">
            <Unicons.UilGithub color='black' size='1.8rem' />
          </a>
          <a href="https://www.linkedin.com/in/kristijan-federer/" >
            <Unicons.UilLinkedin color='black' size='1.8rem' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
