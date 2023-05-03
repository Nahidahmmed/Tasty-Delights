
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true); // change to false if user is not logged in
  const [userName, setUserName] = useState(""); // change to user's name if available

  const handleLogout = () => {
    // handle logout logic here
    setLoggedIn(false);
  };

  const handleLogin =()=>{
    console.log(login);
  }

  return (

    <Navbar className="container rounded px-5" style={{ background: "orange" }} expand="md">
      <Container style={{ height: '70px' }}>
        <Link className="text-decoration-none fw-bolder"><Navbar.Brand>Tasty Delights</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold " as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>

          {
            userName && 
            <Dropdown  onMouseEnter={(e) => { e.target.click() }}>
            <Dropdown.Toggle  variant="" id="dropdown-basic">
              <Image
                src="https://via.placeholder.com/30"
                roundedCircle
                alt="User Profile"
                style={{ marginRight: "10px" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">{userName}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          }

          {
            userName ? <Link to="/register"> <button className="btn fw-bold" onClick={handleLogout}>Logout</button></Link> : <Link to="/login"> <button className="btn fw-bold" onClick={handleLogin}>Login</button></Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;