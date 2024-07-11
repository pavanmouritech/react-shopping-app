import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import '../../App.css';


const Result = (props: any) => {
  const [productname, setProductName] = useState('');
  const [selectedProducts, setselectedProducts] = useState({...props.grocery});


  const filter = (e: any) => {
    const keyword = e;
    const product = [props.product]
    if (keyword !== '') {
      const results = product.filter((user: any) => {
        return user.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setselectedProducts(results);
    } else {
      setselectedProducts(product);
    }
    setProductName(keyword);
  };

  useEffect(() => {
  //console.log('text',props.text);
   filter(props.text);
  }, [props.text,props.product]);

  return (
    <div className='second-card-scroll min-vh-100 ml-5'>
      <Row md={3}>
        {selectedProducts && selectedProducts.length > 0 ? (
          selectedProducts.map((item: any) => (
            <Container>
              <Card style={{ width: '18rem', height: '450px' }} className='m-3'>
                <Card.Img variant="top" src={item.image} className='cardImage' />
                <div className='ml-5 mt-4' style={{ width: '125px', height: '25px', boxSizing: 'border-box', border: '1px solid #cc6600', backgroundColor: '#cc6600' }}>
                  <span className='d-flex align-items-center' style={{ color: '#fff', fontSize: '14px' }}><b>DEAL OF THE DAY</b></span>
                </div>
                <div className='title text-center ml-2 mt-2'>{item.title}</div>
                <div className='ml-3 mb-2'>
                  <span>$ {item.price}</span>
                </div>
                <div className='col-md'>
                  <div className='d-flex py-2 justify-content-between'>
                    <span className='category'><b>{item.category}</b></span>
                    <span className='ml-4'>
                      {item.rating}
                    </span>
                    <span>
                      <i className="fa fa-star" style={{ color: '#FFA41C' }}></i>
                      <i className="fa fa-star" style={{ color: '#FFA41C' }}></i>
                      <i className="fa fa-star" style={{ color: '#FFA41C' }}></i>
                      <i className="fa fa-star-half-stroke" style={{ color: '#FFA41C' }}></i>
                    </span>
                  </div>
                </div>
                <div className="d-flex mb-4 justify-content-center">
                  <Button style={{ backgroundColor: '#ffcc66', border: '1px solid #a6a6a6', color: '#000', fontWeight: 'bold' }} onClick={() => props.onAddToCart(item)}>
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            </Container>
          ))
        ) : (
          null
        )}
      </Row>
    </div>
  )
}


export default Result;

