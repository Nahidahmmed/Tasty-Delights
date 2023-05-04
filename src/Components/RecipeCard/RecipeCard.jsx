import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RecipeCard = ({ recipe }) => {
    const { name, cooking_method, rating, ingredients } = recipe;
    const [favorite,setFavorite] = useState(false)

    const handleTost = () => {
        toast("Added to favorite")
       setFavorite(true)

    }

    return (
        <div className='container'>
            <Card className='p-3 sm:w[100%]' style={{ width: '70%', margin: 'auto', marginTop: "50px" }}>

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

                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                        readonly
                        placeholderSymbol={<AiFillStar className='text-warning'></AiFillStar>}
                        fullSymbol={<AiFillStar></AiFillStar>}
                    />
                </Card.Body>
                <Card.Body>
                    <Link><Button class="btn btn-primary" disabled={favorite} onClick={handleTost} >Favorite</Button><ToastContainer /></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;