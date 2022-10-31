import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/66rM3zq6/restaurant-badge-and-logo-good-for-print-vector-removebg-preview.png"
              height="60"
              width="60"
              className="d-inline-block align-top"
            />{' '}
       <h6 > Cafe Stories </h6>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
 