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
                <h4>
                Your Brand is more than a logo or a business, your Brand has a story to tell, an unforgettable experience to create and the opportunity to see your product or service as a need that your audience wants to live.
                <br/>
                <br/>
                Join Us. Let us show you how we do it.
                </h4>
            </div>
            :
            <div>
              <h1>Beinvenidos</h1>
              <h4>
              El poder de una marca está en las historias que puede contar, en las experiencias que
              construye, en la manera como se queda en la mente y corazón de sus audiencias, creando
              identidad y apropiación de los productos o servicios.              </h4>
            </div>
          }
          </div>
          <Carousel>
            <Carousel.Item>
              <img id='carImg' src={docks} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
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