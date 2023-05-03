import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Card, Button, Row, Container } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';


const ChefRecipes = () => {
    const {id} = useParams();
    const chef = useLoaderData();
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes,shortBio, likes } = chef;
    console.log(chef);
    const recipes = chef.recipes;
    console.log(recipes);
    return (
           <div>
            {
                recipes.map(recipe => <RecipeCard recipe={recipe}></RecipeCard>)
            }
           </div>
    );
};

export default ChefRecipes;