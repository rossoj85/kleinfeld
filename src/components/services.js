import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Jumbotron} from 'react-bootstrap';
export default (props)=>{
    let language = props.language
    console.log('ourWork props', props)
    return(
        <ScrollableAnchor id={'services'} >
            <div >
            <Jumbotron id='servicesJumbo'>
                        <div  id='servicesJumboText' className=' jumboTextBlack'>
                            { language==='eng' ?
                            <div>
                                <h1>Our Services</h1>
                            </div>
                            :
                            <div>
                                <h1>Nuestro Servicios</h1>
                            </div>
                            }
                        </div>
                </Jumbotron>
                
                <div className='textBox'>
                    {
                        language==='eng' ?
                        <div>
                            <h2>
                                Be + Digital, Be + Social and Adds, are part of our value offer, a way
                                to look and approach audiences from different fronts, with the purpose
                                to drive the business strategy of each of our clients, because without
                                import the size of them, there is something clear, be and be part of the era
                                digital, rather than a necessity, means being responsible, timely, accurate and
                                expressive, requires to devise and strengthen the personality of the brand, the connection with
                                your audiences, understand the way users today search within all
                                the existing possibilities (reviews, influencers, SEO, among others) the best
                                option.
                            </h2>
                        </div>
                        :
                        <div>
                            <h2>
                            Be+ Digital, Be+ Social y Adds, hacen parte de nuestra oferta de valor, una manera
                            de mirar y acercarnos a las audiencias desde diferentes frentes, con el propósito
                            de impulsar la estrategia de negocio de cada uno de nuestros clientes, porque sin
                            importar el tamaño de los mismos, hay algo claro, estar y hacer parte de la era
                            digital, más que una necesidad, significa ser responsable, oportuno, preciso y
                            expresivo, requiere idear y fortalecer la personalidad de la marca, la conexión con
                            sus audiencias, entender la manera como los usuarios hoy buscan dentro de todas
                            las posibilidades existentes (reviews, influencers, SEO, entre otros) la mejor
                            opción.
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