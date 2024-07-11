import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Image, Form, Button } from 'react-bootstrap';
import './header.css';
import { Outlet, useNavigate } from 'react-router-dom';



const Header = (props: any) => {
    const [isCart, setIsCart] = useState(true);

    const userName:any =localStorage.getItem('userData');
    const obj = JSON.parse(userName)
   // console.log('username',userName);

    const clickOnCart = () =>{
        setIsCart(true);
        props.clickOnCart(isCart);
    }


    return (
        <>
            <Navbar className='mb-3' style={{ backgroundColor: '#202020' }}>
                <Nav>
                    <Image src={require('../assets/amazon-dark.png')} className='headerlogo' />
                </Nav>
                <Nav className='ml-auto'>
                    <Form className="d-flex mt-2 mr-5" style={{ width: '500px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search Amazon.in"
                            aria-label="Search"
                            onChange={(e) => props.setFilter(e.target.value)}
                        />
                        <span className="input-group-text" id="search-icon" style={{ backgroundColor: '#febd69' }}>
                            <i className="fa fa-search"></i>
                        </span>
                    </Form>
                    
                    <div className="mt-2 mb-2 mr-5">
                        <span className="text">{obj.name}</span>
                    </div>
                    <div className='button'>
                        <Button variant="outline-light" onClick={clickOnCart}>
                            <span>Cart</span>
                            <i className="fa fa-cart-plus" color='#000'></i>
                            <span className='ml-1'>{props.count}</span>
                        </Button>
                    </div>
                </Nav>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Header;