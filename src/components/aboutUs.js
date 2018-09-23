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
                <Jumbotron id='aboutJumbo' >
                    <div  id='aboutUsJumboText' className=' jumboTextBlack'>
                        { language==='eng' ?
                            
                                <h1>About Us</h1>
                            
                        :
                           
                                <h1>Sobre Nosotros</h1>
                            
                        }
                    </div>
                </Jumbotron>
                
                <div className='textBox'>
                    {
                    language==='eng' ?
                    <h2>
                    Kleinfeld Advisors is a marketing agency that builds brick-by-brick, creating new images and business
                    for small and medium-sized enterprises through stories, creative audiovisual content 
                    and interactive analysis of data.
                    <br/>
                    <br/>
                    We collect the necessary insights that allow us to get closer and reach
                    to the desired audience in the right way and at the right time. Kleinfeld Advisors creates
                    solid and lasting communities around products and services, giving them shape, 
                    life and feeling to what each brand wants to show.
                    
                    </h2>
                    :
                    <h2>
                    Kleinfeld Advisors es una agencia de mercadeo que construye con cada marca, crea un nuevo
                    estilo de vida y de negocio para audiencias de pequeñas y medianas empresas, a
                    través de historias, recursos creativos, visuales, audiovisuales, interactivos y del
                    análisis de datos.
                    <br />
                    <br />
                    En Kleinfeld Advisors recopilamos los insights necesarios que nos permiten acercarnos y llegar
                    a las audiencias deseadas, de la forma correcta y en el momento adecuado, creando
                    comunidades sólidas y duraderas, dándole forma, vida y sentimiento a lo que cada
                    marca quiere mostrar.
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