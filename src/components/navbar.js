import React from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';

export default ()=>{
    console.log('inside')
    return(
        <Navbar inverse collapseOnSelect id='navbar'>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
       About Us
      </NavItem>
      <NavItem eventKey={2} href="#">
       Our Work
      </NavItem>
      <NavItem eventKey={1} href="#">
      Services
    </NavItem>
    <NavItem eventKey={2} href="#">
      Contact
    </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
} 