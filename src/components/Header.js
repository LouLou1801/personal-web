import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles.css';  // Correct relative path

const Header = () => {
        return (
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
            <Container>
              <Navbar.Brand href="#home">LauraDev</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className="me-5" >Home</Nav.Link>
                  <Nav.Link href="#about" className="me-5">About</Nav.Link>
                  <Nav.Link href="#contact"className="me-5">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
};
      
export default Header;