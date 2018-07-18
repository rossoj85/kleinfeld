import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import mill from './images/mill.jpg'
import ScrollableAnchor from 'react-scrollable-anchor'

export default (props)=>{
    let language = props.language
    console.log('ourWork props', props)
    return(
        <ScrollableAnchor id={'ourWork'} >
            <div id='ourWork'>
                <div  id='ourWorkJumboText' className=' jumboTextBlack col-lg-6 col-md-6'>
                    { language==='eng' ?
                    <div>
                        <h1>Our Work</h1>
                        <h4>
                        ENGLISH TRANSLATION NEEDED
                        </h4>
                    </div>
                    :
                    <div>
                        <h1>Nuestro Trabajo</h1>
                        <h4>
                        Existimos gracias a las marcas que confían en nosotros, los mismos que nos permiten seguir
                        creciendo conjuntamente.
                        <br/>
                        Contamos con un equipo de trabajo maravilloso, motivado, soñador e intercultural que se deja
                        tocar por la inspiración para transformer una idea en una estrategia que se desarrolla de
                        principio a fin.
                        </h4>
                    </div>
                    }
                </div>
                <Jumbotron id='ourWorkJumbo'  />
                <div className='textBox'>
                    {
                        language==='eng' ?
                        <h3>ENGLISH TRANSLATION NEEDED</h3>
                        :
                        <div>
                            <h3>
                            Existimos gracias a las marcas que confían en nosotros, los mismos que nos permiten seguir
                            creciendo conjuntamente.
                            <br/>
                            <br/>
                            Contamos con un equipo de trabajo maravilloso, motivado, soñador e intercultural que se deja
                            tocar por la inspiración para transformer una idea en una estrategia que se desarrolla de
                            principio a fin.
                            </h3>
                        </div>
                    }
                </div>
                <div id='ourClients'>
                {
                    language==='eng'? 
                    <h1>Our Clients</h1>
                    :
                    <h1>Nuestros Clientes</h1>

                }
                </div>
            </div>
        </ScrollableAnchor>
    )
}