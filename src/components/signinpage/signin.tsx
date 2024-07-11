import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../../App.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const showToastMessage = () => {
    const data: any = localStorage.getItem('userData');
    let data1: any = JSON.parse(data);

    if (email !== data1.email && password !== data1.password) {
      console.log('name', name, 'email', email, 'password', password);
      toast.error("Please Sign Up Your Application!", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSubmit = () => {
    
    const data: any = localStorage.getItem('userData');
    let data1: any = JSON.parse(data);
    console.log('data', data);
    localStorage.getItem('user');

    if (email == data1.email && password == data1.password) {
      console.log('name', name, 'email', email, 'password', password);
      alert('LoginPage successfully');
      navigate('/DashBoard');
    } else {
      // alert('Invalid credentials');
     showToastMessage();
    }
  };

  const OnClick_SignUp = () => {
    navigate('/SignUp');
  }

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="mt-3 ml-2">
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
              <Form.Label>Email address :</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Label>Password :</Form.Label>
              <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
          <div>
            Not registered yet?{" "}
            <Button variant="outline-success" onClick={OnClick_SignUp}>Sign Up</Button>
          </div>
          <div className="d-grid gap-2 mt-4">
            <Button variant="outline-success" onClick={handleSubmit}>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;