import React, { useContext, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaGooglePlusG, } from 'react-icons/fa';
import { AiOutlineGithub } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  const from = location.state?.from?.pathname || '/';
  ;
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setShowError(true);
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.massage);
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className="container mt-5 text-center">
      <h1 className="fw-bold text-center">Login</h1>
      <Form onSubmit={handleSignIn}>
        <Form.Group controlId="formBasicEmail">

          <Form.Control className="mx-auto mt-5" style={{ width: "50%", height: '55px' }} name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">

          <Form.Control className="mx-auto mt-4" style={{ width: "50%", height: '55px' }} name="password" type="password" placeholder="Password" required />
        </Form.Group>

        <Button className="mt-4 fw-bold fs-5" style={{ width: "50%", height: '55px' }} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <hr className="mt-5 mb-5" />

      <h3>Or sign in with</h3>

      <div className="d-flex justify-content-center">
        <Button onClick={handleGoogleSignIn} variant="outline-danger" className="me-3">
          <FaGooglePlusG /> Google
        </Button>
        <Button variant="outline-dark">
          <AiOutlineGithub></AiOutlineGithub> GitHub
        </Button>
      </div>
      <p className="mt-2 mb-5">Don't have an account? <Link to="/register">Sign up here</Link></p>

    </div>
  );
}

export default Login;
