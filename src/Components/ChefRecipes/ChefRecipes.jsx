import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const ChefRecipes = () => {
    const {id} = useParams();
    const chef = useLoaderData();
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes,shortBio, likes } = chef;
    console.log(chef);
    const recipes = chef.recipes;
    const {name} = recipes;
    return (
        <div>
             <Card className='container' style={{ width: '600px' }}>
      <Card.Img variant="top" src={chefPicture} />
      <Card.Body>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text>
          <strong>Ingredients:</strong>
          {/* <ul>
            {.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul> */}
          <strong>Method:</strong>
          <p>{}</p>
          <strong>Rating:</strong>
          <p>{}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ChefRecipes;