import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
  const chefs = useLoaderData()
  console.log(chefs);
    return (
        <div>
            <Container fluid className="bg-light container">
      <Row>
        <Col xs={12} md={6} className="py-5">
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            mauris sed nibh tincidunt hendrerit. Duis vel suscipit arcu. In
            quis velit sed lectus egestas eleifend vitae non elit. Integer non
            velit sed velit facilisis dictum.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <Image src="https://ibb.co/jRydYMG" fluid />
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Home;