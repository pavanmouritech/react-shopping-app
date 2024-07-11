import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import '../../App.css';

const mobiles = [
  {
    "id": 1,
    "title": "OnePlus Camon 20 Pro 5G",
    "category": "OnePlus",
    "price": 19999,
    "rating": 4.6,
    "image": "https://m.media-amazon.com/images/I/71b+-Y1SaML._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 2,
    "title": "Redmi 12C (Lavender Purple, 4GB RAM, 64GB Storage)",
    "category": "Redmi",
    "price": 8999,
    "rating": 4.8,
    "image": "https://m.media-amazon.com/images/I/81Zo3lcSZeL._SL1500_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 3,
    "title": "OnePlus 11 5G (Marble Odyssey, 16GB RAM, 256GB Storage)",
    "category": "OnePlus",
    "price": 69999,
    "rating": 4.6,
    "image": "https://m.media-amazon.com/images/I/41QQ3UZ0TtL._SX300_SY300_QL70_FMwebp_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 4,
    "title": "Samsung Galaxy M13 (Stardust Brown, 6GB, 128GB Storage)",
    "category": "Samsung",
    "price": 12999,
    "rating": 4.5,
    "image": "https://m.media-amazon.com/images/I/81Prc5i7hML._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 5,
    "title": "Realme narzo N55 (Prime Blue, 4GB+64GB)",
    "category": "Realme",
    "price": 10999,
    "rating": 4.7,
    "image": "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 6,
    "title": "Redmi Z7s 5G (Norway Blue, 8GB RAM, 128GB Storage)",
    "category": "Redmi",
    "price": 19999,
    "rating": 4.6,
    "image": "https://m.media-amazon.com/images/I/71k3gOik46L._SL1200_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 7,
    "title": "Realme narzo 60 5G (Mars Orange,8GB+128GB)",
    "category": "Realme",
    "price": 17999,
    "rating": 4.8,
    "image": "https://m.media-amazon.com/images/I/81pMQ-xY-vL._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 8,
    "title": "Motorola G73 5G (Midnight Blue, 8GB RAM, 128GB Storage)",
    "category": "Motorola",
    "price": 18599,
    "rating": 4.4,
    "image": "https://m.media-amazon.com/images/I/616ob07MF5L._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 9,
    "title": "OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) ",
    "category": "OPPO",
    "price": 24999,
    "rating": 4.8,
    "image": "https://m.media-amazon.com/images/I/81t-iyg0JfL._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 10,
    "title": "Vivo Y100 5G (Pacific Blue, 8GB RAM, 128GB Storage)",
    "category": "Vivo",
    "price": 21999,
    "rating": 4.7,
    "image": "https://m.media-amazon.com/images/I/610cjhPdq3L._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 11,
    "title": "Oppo A78 (Sunlight Orange, 4GB RAM, 64GB Storage)",
    "category": "OPPO",
    "price": 9999,
    "rating": 4.5,
    "image": "https://m.media-amazon.com/images/I/61xz-jjS+ML._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 12,
    "title": "Apple iPhone 14 (512 GB) - Blue",
    "category": "Apple",
    "price": 94900,
    "rating": 4.9,
    "image": "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
]

const Mobile = (props: any) => {
  const [productname, setProductName] = useState('');
  const [foundProducts, setFoundProducts] = useState(mobiles);
  const [count, SetCount] = useState(0);
  const [disable,Setdisable] = useState(0);

  // const increment = (index:any) =>{
  //   const IncrCount = [...foundProducts];
  //   SetCount(IncrCount[index]['count']++);
  //   setFoundProducts(IncrCount);
  //   Setdisable(prevCount => prevCount + 1);
  // }

  // const decrement = (index:any) =>{
  //   const DecCount = [...foundProducts];
  //   SetCount(DecCount[index]['count']--);
  //   setFoundProducts(DecCount);
  //   Setdisable(prevCount => prevCount - 1);
  // }

  useEffect(() => {
    console.log(props.text);
    filter(props.text)
  }, [props.text]);

  const filter = (e: any) => {
    const keyword = e;

    if (keyword !== '') {
      const results = mobiles.filter((user) => {
        return user.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundProducts(results);
    } else {
      setFoundProducts(mobiles);
    }
    setProductName(keyword);
  };

  return (
    <div className='second-card-scroll min-vh-100 ml-5'>
      <Row md={3}>
        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map((item,index) => (
            <Container>
              <Card style={{ width: '18rem', height: '450px' }} className='m-3'>
                <Card.Img variant="top" src={item.image} className='cardImage' />
                <div className='ml-5 mt-4' style={{ width: '125px', height: '25px', boxSizing: 'border-box', border: '1px solid #cc6600', backgroundColor: '#cc6600' }}>
                  <span className='text-center' style={{ color: '#fff', fontSize: '14px' }}><b>DEAL OF THE DAY</b></span>
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
                  {/* <div className='d-flex gap-2'>
                    <Button style={{backgroundColor: '#ffcc66', borderColor: '#fff', color: '#000', fontWeight: 'bold'}} disabled={item.count === 0}>-</Button>
                    <span className='d-flex align-items-center'>{item.count}</span>
                    <Button style={{backgroundColor: '#ffcc66', borderColor: '#fff', color: '#000', fontWeight: 'bold'}}>+</Button>
                  </div> */}
                  <Button style={{ backgroundColor: '#ffcc66', border: '1px solid #a6a6a6', color: '#000', fontWeight: 'bold' }} onClick={() => props.onAddToCart(item)}>
                    ADD TO CART
                  </Button>
                </div>
              </Card>
            </Container>
          ))
        ) : (
          <h1></h1>
        )}
      </Row>
    </div>
  );
}

export default Mobile;