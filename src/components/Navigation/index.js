import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../App.css";

function Navigation() {
    return (
        <Navbar className="navbar" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Item>
                <Nav.Link className="pt-4" href="/">ABOUT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-4" href="/skills">SKILLS</Nav.Link>
              </Nav.Item>
              {/* <Navbar.Brand className="p-4 brand" href="/">CANDICE <br/> MOREAU</Navbar.Brand> */}
              <Nav.Item >
                <Nav.Link className="p-4" href="/projects">PROJECTS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-4" href="/contact">CONTACT</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
  export default Navigation;
  