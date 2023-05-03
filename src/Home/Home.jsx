import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import backgroundImage from "../../public/Common-Skills-Needed-to-be-a-Chef.jpg";
const Home = () => {

    const [chefData , setChefData] = useState([]);

    useEffect(() =>{
      fetch("http://localhost:5000/chefs")
    .then((res) => res.json())
    .then((data) => setChefData(data));
    
    },[])
    console.log(chefData);
    return (
        <div>
           <div
      className="bg-image container "
      style={{ backgroundImage: `url(${backgroundImage})`, width:'60%',height:"500px" }}
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
        </div>
    );
};

export default Home;