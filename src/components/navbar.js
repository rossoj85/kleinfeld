import React from 'react';
// import spainFlag from './images/spainFlag.jpg'
// import usFlag from './images/usFlag.jpg';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default (props)=>{
    console.log('inside')
    console.log('Navbar Props', props)
    let language = props.language
    return(
        <Navbar inverse collapseOnSelect fixedTop id='navbar'>
  <Navbar.Header>
    <Navbar.Brand>
      <LinkContainer to='/'><a>Be<small>+</small></a></LinkContainer>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
    

  <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer to='/about'><NavItem eventKey={1} >About Us</NavItem></LinkContainer>
      <LinkContainer to='/ourWork'><NavItem eventKey={2} >
       Our Work
      </NavItem></LinkContainer>
      <LinkContainer to='/services'><NavItem eventKey={1} >
      Services
    </NavItem></LinkContainer>
    <LinkContainer to='/contact'><NavItem eventKey={2} >
      Contact
    </NavItem></LinkContainer>
    {/*
    <NavItem eventKey={2} href="#">
    {
    language==='esp'?
    <img id ='flag' src={usFlag} onClick={props.changeLanguage} />
    :
    <img id='flag' src={spainFlag} onClick={props.changeLanguage} />
    }
    </NavItem>
  */}
    </Nav>
  </Navbar.Collapse>
  <div id='lang'>
  {
    language==='esp'?
    <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> English Site</p>
    :
    <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> Sitio en Español</p>
  }
  </div>  
</Navbar>
    )
} 