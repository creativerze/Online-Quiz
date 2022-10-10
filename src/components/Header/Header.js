import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar className='shadow' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h4>Online Quiz</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="text-decoration-none text-dark me-3" to="/home">Home</Link>
              <Link className="text-decoration-none text-dark me-3" to="/link">Link</Link>
              <Link className="text-decoration-none text-dark me-3" to="/blog">Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;