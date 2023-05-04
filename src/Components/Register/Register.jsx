import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGooglePlusG ,  } from 'react-icons/fa';
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";



const Register = () => {
const [currentUser, setCurrentUser] = useState(null);
  const {createUser,signInWithGoogle} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result => {
          const createdUser = result.user;
          console.log(createdUser);
          setCurrentUser(currentUser);
        })
        .catch(error =>{
          console.log(error);
        })
      };

    const handleGoogleSignUp = () =>{
      signInWithGoogle()
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>{
        console.log(error.message);
      })
    }
 
    return (
        <div className="container">
        <h1 className="text-center mt-4 fw-bold">Registration Here</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
           
            <Form.Control
            className="mx-auto mt-5" style={{width:"50%" ,height:'55px'}}
              type="text"
              placeholder="Enter name"
              name="name"
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            
            <Form.Control
            className="mx-auto mt-5" style={{width:"50%" ,height:'55px'}}
              type="email"
              placeholder="Enter email"
                name="email"
                required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Control
            className="mx-auto mt-5" style={{width:"50%" ,height:'55px'}}
              type="password"
              placeholder="Password"
                name="password"
                required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPhotoUrl">

            <Form.Control
            className="mx-auto mt-5" style={{width:"50%" ,height:'55px'}}
              type="text"
              placeholder="Enter photo URL"
              name="photo"
              required
            />
          </Form.Group>
  
          <Button  className="mt-4 fw-bold fs-5 " style={{width:"50%",height:'55px',marginLeft:'25%'}}  variant="primary" type="submit">
            Submit
          </Button>
          <div className="d-flex justify-content-center mt-4">
        <Button onClick={handleGoogleSignUp} variant="outline-danger" className="me-3">
           <FaGooglePlusG /> Google
        </Button>
        <Button variant="outline-dark">
          <AiOutlineGithub></AiOutlineGithub> GitHub
        </Button>
      </div>
      <p className="mt-4 mb-5 text-center">Already have an account? <Link to="/login">Sign in here</Link></p>
        </Form>
      </div>
    );
};

export default Register;