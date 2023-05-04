
import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const {user,logOut} = useContext(AuthContext);
  console.log( 'this is user ',user);

  const handleLogout = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
    setLoggedIn(false);
  };

  const handleLogin =()=>{
    
  }

  return (

    <Navbar className="container rounded px-5" style={{ background: "orange" }} expand="md">
      <Container style={{ height: '70px' }}>
        <Link className="text-decoration-none fw-bolder"><Navbar.Brand>Tasty Delights</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" as={Link}  to="/" >
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold " as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>

          {
            user && 
            <Dropdown  onMouseEnter={(e) => { e.target.click() }}>
            <Dropdown.Toggle  variant="" id="dropdown-basic">
              <Image
                src='https://ibb.co/LvZMgHS'
                roundedCircle
                style={{ marginRight: "10px" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">user name</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          }

          {
            user ? <Link to="/login"> <button className="btn fw-bold" onClick={handleLogout}>Logout</button></Link> : <Link to="/login"> <button className="btn fw-bold" onClick={handleLogin}>Login</button></Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;