import React from 'react';
// import spainFlag from './images/spainFlag.jpg'
// import usFlag from './images/usFlag.jpg';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';

export default (props)=>{
    console.log('inside')
    console.log('Navbar Props', props)
    let language = props.language
    return(
        <Navbar inverse collapseOnSelect fixedTop id='navbar'>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Be<small>+</small></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
    

  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="/about">
       About Us
      </NavItem>
      <NavItem eventKey={2} href="/ourWork">
       Our Work
      </NavItem>
      <NavItem eventKey={1} href="/services">
      Services
    </NavItem>
    <NavItem eventKey={2} href="/contact">
      Contact
    </NavItem>
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