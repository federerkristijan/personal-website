import React from 'react'
import './Footer.css'
import * as Unicons from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>federer.kristijan@gmail.com</span>
        <div className="f-icons">
          <Unicons.UilGithub color='yellow' size='1.8rem' />
          <Unicons.UilLinkedin color='yellow' size='1.8rem' />
        </div>
      </div>
    </div>
  )
}

export default Footer
