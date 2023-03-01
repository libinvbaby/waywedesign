import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


const BasicExample = () => {
    return (
        <Navbar >
            <Container>
            <LinkContainer to="/">
  <Navbar.Brand><img width="150px" src="/assets/images/logo-wwd.png"/></Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <LinkContainer to='/'><Nav.Link>About Us</Nav.Link></LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default BasicExample