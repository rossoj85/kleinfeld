import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import dummyProfile from './images/dummyProfile.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'


export default (props)=>{
    let language = props.language
    console.log('Hello from aboutUs', props)
    const profiles = [
        {name: 'Mike', title: 'Account Manager' , education: 'Harvard University' , },
        {name: 'Monica' , title: 'Marketing and Creative Director' , education: 'Harvard University' , },
        {name: 'Jason', title: 'Design and Development' , education:'Northeasern University', }
    ]
    return(
        <ScrollableAnchor id={'about'}>
            <div id='aboutUs'>
                <div  id='aboutUsJumboText' className=' jumboTextBlack col-lg-6 col-md-6'>
                { language==='eng' ?
                <div>
                    <h1>About Us</h1>
                    <h4>
                    ENGLISH TRANSLATION NEEDED
                    </h4>
                </div>
                :
                <div>
                    <h1>Sobre Nosotros</h1>
                    <h4>
                        XXXXX es una agencia de mercadeo que crea un estilo de vida y de negocio para pequeñas y
                        medianas empresas, a través de historias, recursos creativos, visuales, audiovisuales,
                        interactivos y del análisis de datos.
                    </h4>
                </div>
                }
                </div>
                <Jumbotron id='aboutJumbo'  />
                
                <div className='textBox'>
                    {
                    language==='eng' ?
                    <h1>ENGLISH TRANSLATION NEEDED</h1>
                    :
                    <h2>
                    En XXXX recopilamos los insights necesarios que nos permiten acercarnos y llegar a las
                    audiencias deseadas, de la forma correcta y en el momento adecuado, creando de esta
                    manera comunidades sólidas que perduran, dándole forma, vida y sentimiento al producto y
                    servicio ofrecido por cada marca.
                    </h2>
                    }
                </div>

                <div id='aboutProfiles' >
                {
                    profiles.map(profile=>(
                        <div className="card col-sm-6 col-md-6 col-lg-4">
                            <img src={dummyProfile} alt="John" style={{width:"100%"}} />
                            <h1>{profile.name}</h1>
                            <p className="title">{profile.title}</p>
                            <p>{profile.education}</p>
                            <div style={{margin: "24px 0"}}>
                                <a href="#"><i className="fa fa-dribbble"></i></a> 
                                <a href="#"><i className="fa fa-twitter"></i></a>  
                                <a href="#"><i className="fa fa-linkedin"></i></a>  
                                <a href="#"><i className="fa fa-facebook"></i></a> 
                        </div>
                        <p><button>Contact</button></p>
                    </div>
                    ))
                }
                
                </div>
            </div>
        </ScrollableAnchor>
    )
}