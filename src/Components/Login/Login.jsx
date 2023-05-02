import React from "react";
import { Form, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const  Login = () => {
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <hr className="mt-5 mb-5" />

      <h3>Or sign in with</h3>

      <div className="d-flex justify-content-center">
        <Button variant="outline-danger" className="mr-3">
           Google
        </Button>
        <Button variant="outline-dark">
           GitHub
        </Button>
      </div>

      <hr className="mt-5 mb-5" />

      <p>Don't have an account? <Link to="/registration">Sign up here</Link></p>
    </div>
  );
}

export default Login;
