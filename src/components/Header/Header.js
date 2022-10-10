import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar className='shadow' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h4>Online Quiz</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;