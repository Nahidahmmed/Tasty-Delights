import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import backgroundImage from "../../public/Common-Skills-Needed-to-be-a-Chef.jpg";
import ShowChefData from '../Components/showChefData/ShowChefData';

const Home = () => {

  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/chefs");
        const data = await res.json();
        setChefData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, [])
  return (
    <div>
      <div
        className="bg-image container "
        style={{ backgroundImage: `url(${backgroundImage})`, width: '60%', height: "500px" }}
      >
        <Container fluid className=" container">
          <Row>
            <div xs={12} md={6} className="py-5 text-white ">
              <h1 className="display-4 mt-6">Welcome to My Website</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
                mauris sed nibh tincidunt hendrerit. Duis vel suscipit arcu. In
                quis velit sed lectus egestas eleifend vitae non elit. Integer non
                velit sed velit facilisis dictum.
              </p>
            </div>
          </Row>
        </Container>
      </div>
      <div className='chefs-card container'>
        {
          chefData.map(data => <ShowChefData key={data.id} data={data}></ShowChefData>)
        }
      </div>
      {/* about us */}
      <div>
        <Container className="py-5 text-center">
          <Row>
            
              <div>
                <h2 className="mb-4">About Us</h2>
                <p className="lead mb-4">We are a team of passionate chefs and food enthusiasts who love to create and share delicious recipes with the world.</p>
                <p className="mb-4">Our mission is to inspire people to cook at home and discover new flavors and cuisines from around the globe.</p>
                <p className="mb-4">Whether you're a beginner or an experienced cook, we've got something for you. Browse our collection of recipes and start cooking today!</p>
                <Button variant="primary" >Browse Recipes</Button>
              </div>
            
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;