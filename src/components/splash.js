import React from 'react';
import kLogo from './images/kLogo.png'


export default (props)=>{
    console.log('inside splash BoxClass', props.boxClass)
    return(
        <div id='splashBody' className={props.divClass.join(' ')}>
            <div id='splashText'>
                <h1 className={props.textClass.join(' ')}>Your Brand Has a Story To Tell...</h1>
                <div id='splashLogo' className={props.logoClass.join(' ')}>
                    <img src={kLogo}   />
                    <h2 className={props.logoClass.join(' ')}>K L E I N F E L D &nbsp; &nbsp; A D V I S O R S</h2>
                </div>
            </div>
        </div>
    )
}