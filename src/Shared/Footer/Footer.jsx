import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white container py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Chef Recipes</h5>
            <p>Chef Recipes is a platform for food lovers to share and discover delicious recipes from around the world.</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/recipes">Recipes</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@chefrecipes.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, Anytown USA</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Chef Recipes. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
