import React from 'react';
import { Card, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ShowChefData = ({data}) => {
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes,shortBio, likes,id } = data ;
    return (
        <div className='container'>  
         <Card className='p-3' style={{ width: '80%' , margin:'auto'}}>
      <Card.Img variant="top" src={chefPicture} />
      <Card.Body className=''>
        <Card.Title className='fw-bold'>{chefName}</Card.Title>
        <Card.Text>
          {shortBio}
        </Card.Text>
        <p>Years of experience: {yearsOfExperience}</p>
        <p>Numbers of recipes: {numberOfRecipes}</p>
        <p><small>Likes: {likes}</small></p>
      </Card.Body>
      <Card.Body>
        <Link to={`/chef/${id}`}><Button  variant="outline-dark">View Recipes</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ShowChefData;
