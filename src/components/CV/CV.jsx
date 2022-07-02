import React from 'react'
import './CV.css'
import CV_png from '../../assets/images/KFCV.png'
import CV_pdf from '../../assets/images/CV.pdf'

const CV = () => {
  return (
    <div className='cv-wrapper' id='cv'>
      <div className="i-cv">
        <img src={CV_png} alt='cv' />
      </div>
      <a href={CV_pdf} download='Federer Kristijan CV'><button className='button cv-button'>Download CV</button></a>
    </div>
  )
}

export default CV
