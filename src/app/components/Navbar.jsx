"use client";
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
      <Navbar
          expand="lg"
          style={{
              backgroundColor: "#1e2939",
              color: "white",
              padding: "15px",
          }}
      >
          <Container style={{ color: "" }}>
              <Navbar.Brand href="#" style={{ color: "white" }}>
                  Logo
              </Navbar.Brand>
              <Navbar.Toggle
                  aria-controls="navbarNav"
                  style={{ color: "#101828", border: "2px solid #101828" }}
              />
              <Navbar.Collapse id="navbarNav" style={{ color: "white" }}>
                  <Nav className="me-auto">
                      <Nav.Link href="#" active style={{ color: "white" }}>
                          Home
                      </Nav.Link>
                      <Nav.Link href="#" style={{ color: "white" }}>
                          Blog
                      </Nav.Link>
                      <Nav.Link href="#" style={{ color: "white" }}>
                          About Us
                      </Nav.Link>
                      <Nav.Link href="#" style={{ color: "white" }}>
                          Conatct Us
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavBar;
