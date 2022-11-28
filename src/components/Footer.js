import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>

    <div className='social-icons'>
        <i className='fa-brands fa-facebook'>
          <Link to='//www.facebook.com/ministerioprecursor' className='icon-text'>Facebook</Link>
        </i>
        <i className='fa-brands fa-instagram-square'>
          <Link to='//www.instagram.com/mip.church/' className='icon-text'>Instagram</Link>
        </i>
        <i className='fa-brands fa-youtube-square'>
          <Link to='//www.youtube.com/channel/UCPf8OmJMra6kZXvjJPjlfYg' className='icon-text'>YouTube</Link>
        </i>
    </div>
        <p className='footer-subscription-heading'>
        Siga-nos em nossas mídias sociais!
        </p>
     
      <small className='website rights'>©  2022 Ministério Internacional Precursor.</small>
    </div>
  )
}

export default Footer