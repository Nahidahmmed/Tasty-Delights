import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission logic
      };
    return (
        <div className="container">
        <h1>Registration Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
                name="email"
                required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
                name="password"
                required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPhotoUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo URL"
              name="photo"
              required
            />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};

export default Register;