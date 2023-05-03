import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Card, Button, Row, Container, Col, Image } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';
import { AiFillLike } from "react-icons/ai";


const ChefRecipes = () => {
    const {id} = useParams();
    const chef = useLoaderData();
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes,shortBio, likes } = chef;
    console.log(chef);
    const recipes = chef.recipes;
    console.log(recipes);
    return (
           <div className='mt-5'>
            <Container>
      <Row>
        <Col md={6} className='p-4'>
          <h2>{chefName}</h2>
          <p>{shortBio}</p>
            <p><strong>experience</strong> : {yearsOfExperience} years</p>
            <p><strong>likes:</strong> {likes}<AiFillLike /></p>
        </Col>
        <Col md={6}>
          <Image src={chefPicture} fluid />
        </Col>
      </Row>
    </Container>

            {/* recipe card */}
            <div className='chefs-card container' style={{marginTop:"80px"}}>
            {
                recipes.map(recipe => <RecipeCard recipe={recipe}></RecipeCard>)
            }
           </div>
           </div>
    );
};

export default ChefRecipes;