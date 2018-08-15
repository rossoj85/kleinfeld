import React from 'react';
import mango from './images/mango.png'


export default (props)=>{
    console.log('inside splash BoxClass', props.boxClass)
    return(
        <div id='splashBody' className={props.divClass.join(' ')}>
            <div id='splashText'>
                <h1 className={props.textClass.join(' ')}>Your Brand Has a Story To Tell...</h1>
                <div id='splashLogo' className={props.logoClass.join(' ')}>
                    <img src={mango}   />
                    <h1 className={props.logoClass.join(' ')}>M A N G O</h1>
                </div>
            </div>
        </div>
    )
}