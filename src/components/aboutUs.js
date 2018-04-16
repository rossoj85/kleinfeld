import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import LA from './images/la.jpg'
import church from './images/church.jpg';

export default (props)=>{
    let language = props.language
    console.log('about Us Props', props)
    return(
        <div id='aboutUs'>
            <div  id='jumbotronText' className=' jumboTextBlack col-lg-6 col-md-6'>
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


        </div>
    )
}