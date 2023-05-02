
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const  Header = () => {
    const [loggedIn, setLoggedIn] = useState(true); // change to false if user is not logged in
    const [userName, setUserName] = useState("kashem"); // change to user's name if available
  
    const handleLogout = () => {
      // handle logout logic here
      setLoggedIn(false);
    };
  
    return (
      
        <Navbar className="container rounded px-5" style={{ background:"orange" }}  expand="md">
        <Container style={{ height: '70px'}}>
          <Link className="text-decoration-none fw-bolder"><Navbar.Brand>Tasty Delights</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fw-bold" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link  className="fw-bold" as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            {loggedIn ? (
              <NavDropdown
                title={
                  <Image
                    src="https://via.placeholder.com/30"
                    roundedCircle
                    alt="User Profile"
                    style={{ marginRight: "10px" }}
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>{userName}</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
  
  export default Header;