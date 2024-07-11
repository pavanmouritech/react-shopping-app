import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Image } from "react-bootstrap";
import '../../App.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const [name, SetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
  localStorage.setItem('userData', JSON.stringify(userData));

  console.log('name', name, 'email', email, 'password', password);
  alert('Registration successfully');
  navigate('/');
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="mt-3">
            <h2 className="text-success">AMAZON</h2>
            <h3 className="text-success">Groceries and Mobile Products</h3>
          </div>
          <div>
            <Image src={require('../assets/amazon.jpg')} className="image" />
          </div>
        </div>
        <div className="col-md-6 mb-3 mt-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name :</Form.Label>
              <Form.Control type="name" placeholder="name" value={name} onChange={(e) => SetName(e.target.value)} />
              <Form.Label>Email address :</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Label>Password :</Form.Label>
              <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
          <div className="d-grid gap-2 mt-4">
            <Button variant="outline-success" onClick={handleSubmit}>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;