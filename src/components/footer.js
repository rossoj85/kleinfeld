import React from 'react';
import instagramBlack from './images/instagram-black.svg'
import LA from './images/la.jpg'
export default ()=>{
    console.log('instagramBlack',instagramBlack)
    return(
        <div id='footer'>
        <h1>FOOTER</h1>
        <ul className='nav-footer'>
          <li className='nav-link-footer nav-link-github'>
            <a href='#' target='_blank'>
              <img src={instagramBlack} height='24px' className='default-link'/>
              <img src='/logos/github-white.svg' height='24px' className='hover-link'/>
            </a>
          </li>
          <li className='nav-link-footer nav-link-mail'>
          <a href='mailto:jasonrosso@gmail.com' target='_blank'>
          <img src='/logos/letter.png' height='24px' className='default-link'/>
          <img src='/logos/letter.png' height='24px' className='hover-link' />
        </a>
          </li>
          <li className='nav-link-footer nav-link-linkedin'>
            <a href='https://linkedin.com/in/jason-rosso' target='_blank'>
              <img src='/logos/linkedin-black.svg' height='24px' className='default-link'/>
              <img src='/logos/linkedin-white.svg' height='24px' className='hover-link' />
            </a>
          </li>
        </ul>
        <img src={LA} />
        </div>
    )
}