import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbars = () => {
  return (
    <div>
      <Navbar className="navbar_color">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "black" }}>
              All Books
            </Nav.Link>
            <Nav.Link href="/addbook" style={{ color: "black" }}>
              Add Books
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbars;
