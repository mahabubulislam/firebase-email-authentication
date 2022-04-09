import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailBlur = event => {
    const email = event.target.value
    setEmail(email)
  }
  const handlePasswordBlur = event => {
    const password = event.target.value
    setPassword(password)
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        console.error(error)
      });
  }


  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h1 className='text-primary'>Please Register</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
