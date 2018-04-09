import React, {Component} from 'react';
import { Navbar, Jumbotron, Carousel, Button } from 'react-bootstrap';
import docks from './images/docks.jpg'
import LA from './images/la.jpg'

export default class LandingPage extends Component {
    render() {
        console.log('RENDERING LANDING PAGE!!')
      return (
        <div className='landingPage'>
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
       
      </Carousel>;
        </div>
      );
    }
  }