import React from 'react';
import { Carousel } from 'react-bootstrap';
import docks from './images/docks.jpg'
import LA from './images/la.jpg'


export default (props)=> {
  
    
        console.log('Landing Page Props', props)
        let language = props.language
        
      return (
        <div className='landingPage'>
          <div id='jumbotronText' className='col-lg-6 col-md-6'>
          { language==='eng' ?
            <div>
                <h1>Welcome</h1>
                <p>
                Your Brand is more than a logo or a business, your Brand has a story to tell, an unforgettable experience to create and the opportunity to see your product or service as a need that your audience wants to live.
                <br/>
                <br/>
                Join Us, Let us show you how we do it.
                </p>
            </div>
            :
            <div>
              <h1>Beinvenidos</h1>
              <p>
              Implementamos y fortalecemos los canales digitales, a través de una sólida estrategia de mercadeo digital fundamentada en la consultoría, análisis, diseño, ejecución y mecanismos de medición que permiten llevar trazabilidad y efectividad.
              </p>
            </div>
          }
          </div>
          <Carousel>
            {/*<Carousel.Item>
              <img id='carImg' src={docks} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            */}
            <Carousel.Item>
              <img id='carImg' src={LA}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            
        </div>
      );
    
  }