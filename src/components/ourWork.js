import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import mill from './images/mill.jpg'
import ScrollableAnchor from 'react-scrollable-anchor'

export default (props)=>{
    let language = props.language
    console.log('ourWork props', props)
    return(
        <ScrollableAnchor id={'ourWork'} >
            <div >
                <div  id='ourWorkJumboText' className=' jumboTextBlack col-lg-6 col-md-6'>
                    { language==='eng' ?
                    <div>
                        <h1>Our Work</h1>
                    </div>
                    :
                    <div>
                        <h1>Nuestro Trabajo</h1>
                    </div>
                    }
                </div>
                <Jumbotron id='ourWorkJumbo'  />
                <div className='textBox'>
                    {
                        language==='eng' ?
                        <div>
                            <h2>
                            We exist thanks to the brands that trust us, the same ones that allow us to continue growing together.
                            <br />
                            <br />
                            We have a strong, motivated, intercultural team that thinks big and uses its inspiration 
                            to transform idea into a strategies that develop from start to finish.
                            </h2>
                        </div>
                        :
                        <div>
                            <h2>
                            Existimos gracias a las marcas que confían en nosotros, los mismos que nos permiten seguir
                            creciendo conjuntamente.
                            <br/>
                            <br/>
                            Contamos con un equipo de trabajo maravilloso, motivado, soñador e intercultural que se deja
                            tocar por la inspiración para transformer una idea en una estrategia que se desarrolla de
                            principio a fin.
                            </h2>
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