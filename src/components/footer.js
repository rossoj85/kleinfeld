import React from 'react';
import instagramBlack from './images/instagram-black.svg';
import instagramWhite from './images/instagram-white.svg';
import facebookWhite from './images/facebook-white.png';
import facebookBlack from './images/facebook-black.png';
import twitWhite from './images/twitWhite.png';
import twitBlack from './images/twitBlack.png';
import linkWhite from './images/linkedin-white.svg';
import linkBlack from './images/linkedin-black.svg';

export default ()=>{
    console.log('instagramBlack',instagramBlack)
    console.log('facebookWHite',facebookWhite)
    return(
        <div id='footer'>
        <h1>FOOTER</h1>
        <ul className='nav-footer'>
          <li className='nav-link-footer nav-link-instagram'>
            <a href='#' target='_blank'>
              <img src={instagramWhite} height='24px' className='default-link'/>
              <img src={instagramBlack} height='24px' className='hover-link'/>
            </a>
          </li>
          <li className='nav-link-footer nav-link-instagram'>
          <a href='mailto:jasonrosso@gmail.com' target='_blank'>
          <img src={facebookWhite} height='24px' className='default-link'/>
          <img src={facebookBlack} height='24px' className='hover-link' />
        </a>
          </li>
          <li className='nav-link-footer nav-link-instagram'>
            <a href='https://linkedin.com/in/jason-rosso' target='_blank'>
              <img src={twitWhite} height='24px' className='default-link'/>
              <img src={twitBlack} height='24px' className='hover-link' />
            </a>
          </li>
          <li className='nav-link-footer nav-link-instagram'>
            <a href='https://linkedin.com/in/jason-rosso' target='_blank'>
              <img src={linkWhite} height='24px' className='default-link'/>
              <img src={linkBlack} height='24px' className='hover-link' />
            </a>
          </li>
        </ul>
        
        </div>
    )
}