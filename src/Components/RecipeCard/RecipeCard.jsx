import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { name, cooking_method, rating, ingredients } = recipe;
    return (
        <div className='container'>
            <Card className='p-3 sm:w[100%]' style={{ width: '60%', margin: 'auto' }}>

                <Card.Body className=''>
                    <h2 className='fw-bold'>{name}</h2>
                    <h4>
                        <strong>cooking method:</strong>

                    </h4>
                    <Card.Text>
                        {cooking_method}
                    </Card.Text>
                    <ul>
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </ul>
                    <p>rating: {rating}</p>
                </Card.Body>
                <Card.Body>
                    <Link><Button variant="outline-dark">favorite</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;