import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaGooglePlusG ,  } from 'react-icons/fa';
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const  Login = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fw-bold text-center">Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
        
          <Form.Control className="mx-auto mt-5" style={{width:"50%"}} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        
          <Form.Control className="mx-auto mt-4" style={{width:"50%"}} type="password" placeholder="Password" />
        </Form.Group>

        <Button style={{width:"50%"}} variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <hr className="mt-5 mb-5" />

      <h3>Or sign in with</h3>

      <div className="d-flex justify-content-center">
        <Button variant="outline-danger" className="mr-3">
           <FaGooglePlusG /> Google
        </Button>
        <Button variant="outline-dark">
          <AiOutlineGithub></AiOutlineGithub> GitHub
        </Button>
      </div>

      <hr className="mt-5 mb-5" />

      <p>Don't have an account? <Link to="/registration">Sign up here</Link></p>
    </div>
  );
}

export default Login;
