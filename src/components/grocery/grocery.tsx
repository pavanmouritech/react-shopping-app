import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import '../../App.css';


const grocery = [
  {
    "id": 1,
    "title": "Black Raisins 250 gm",
    "category": "Healthy Product",
    "price": 329,
    "rating": 4.69,
    "image": "https://m.media-amazon.com/images/I/61lU+a2nn5L._SY741_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 2,
    "title": "white Cashew 250 gm",
    "category": "Healthy Product",
    "price": 429,
    "rating": 4.89,
    "image": "https://m.media-amazon.com/images/I/41GaJXcW+MS._SY300_SX300_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 3,
    "title": "Red Cranberry 250 gm",
    "category": "Healthy Product",
    "price": 229,
    "rating": 4.56,
    "image": "https://m.media-amazon.com/images/I/41zWcYKn-CL._SX300_SY300_QL70_FMwebp_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 4,
    "title": "Pistachio California 250 gm",
    "category": "Natural Product",
    "price": 529,
    "rating": 4.79,
    "image": "https://m.media-amazon.com/images/I/61kc-jQM4eL._SY741_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 5,
    "title": "Brown Almonds 250 gm",
    "category": "Natural Product",
    "price": 369,
    "rating": 4.59,
    "image": "https://m.media-amazon.com/images/I/419flaZEevS._SX300_SY300_QL70_FMwebp_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 6,
    "title": "Green Raisins 250 gm",
    "category": "Natural Product",
    "price": 269,
    "rating": 4.29,
    "image": "https://m.media-amazon.com/images/I/41jAdQi2rFS.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 7,
    "title": "Brown Apricots 250g",
    "category": "Original Product",
    "price": 159,
    "rating": 4.19,
    "image": "https://m.media-amazon.com/images/I/41BU+NXOjRL._SY300_SX300_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 8,
    "title": "Strawberry Berry Crunch 400 gm",
    "category": "Original Product",
    "price": 279,
    "rating": 4.49,
    "image": "https://m.media-amazon.com/images/I/612QznHL8GL._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 9,
    "title": "Timios Blueberry and Banana | Combo Pack of 2",
    "category": "Original Product",
    "price": 280,
    "rating": 4.69,
    "image": "https://m.media-amazon.com/images/I/71zTcY5LqJL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 10,
    "title": "Bebe Burp - Oats & Raisins Cookies 300 gm",
    "category": "Chocolate Product",
    "price": 389,
    "rating": 4.59,
    "image": "https://m.media-amazon.com/images/I/71+3UWXg3lL._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 11,
    "title": "Happa Organic Multigrain Apple - Pack of 2",
    "category": "Chocolate Product",
    "price": 358,
    "rating": 4.89,
    "image": "https://m.media-amazon.com/images/I/519dONYIgFL.jpg",
    "count": 0,
    "finalPrice": 0,
  },
  {
    "id": 12,
    "title": "Slurrp Farm Choco Crunch Chocolate 400 gm",
    "category": "Chocolate Product",
    "price": 279,
    "rating": 4.19,
    "image": "https://m.media-amazon.com/images/I/71IDXocbx4L._SX679_.jpg",
    "count": 0,
    "finalPrice": 0,
  }
]

const Grocery = (props: any, item: any) => {
  const [productname, setProductName] = useState('');
  const [foundProducts, setFoundProducts] = useState(grocery);
  const [count, SetCount] = useState(0);
  const [disable,Setdisable] = useState(0);
  const [total, Settotal] = useState(0);

  // const increment = (index:any) =>{
  //   const IncrCount = [...foundProducts];
  //   SetCount(IncrCount[index]['count']++);
  //   setFoundProducts(IncrCount);
  //   Setdisable(prevCount => prevCount + 1);
  //   Settotal(total + IncrCount[index]['price']);
  // }

  // const decrement = (index:any) =>{
  //   const DecCount = [...foundProducts];
  //   SetCount(DecCount[index]['count']--);
  //   setFoundProducts(DecCount);
  //   Setdisable(prevCount => prevCount - 1);
  //   Settotal(total - DecCount[index]['price']);
  // }

  console.log('grocery',foundProducts);
  useEffect(() => {
    //console.log(props.text);
   // filter(props.text)
  }, [props.text]);


  // const filter = (e: any) => {
  //   const keyword = e;
  //   if (keyword !== '') {
  //     const results = grocery.filter((user) => {
  //       return user.title.toLowerCase().startsWith(keyword.toLowerCase());
  //     });
  //     setFoundProducts(results);
  //   } else {
  //     setFoundProducts(grocery);
  //   }
  //   setProductName(keyword);
  // };

  return (
    <div className='second-card min-vh-100 ml-5'>
      <Row md={3}>
        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map((item,index) => (
            <Container>
              <Card style={{ width: '18rem', height: '450px' }} className='m-3'>
                <Card.Img variant="top" src={item.image} className='cardImage' />
                <div className='ml-5 mt-4' style={{ width: '125px', height: '25px', boxSizing: 'border-box', border: '1px solid #cc6600', backgroundColor: '#cc6600' }}>
                  <span className='d-flex align-items-center' style={{ color: '#fff',fontSize:'14px' }}><b>DEAL OF THE DAY</b></span>
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
                    <i className="fa fa-star" style={{color:'#FFA41C'}}></i>
                    <i className="fa fa-star" style={{color:'#FFA41C'}}></i>
                    <i className="fa fa-star" style={{color:'#FFA41C'}}></i>
                    <i className="fa fa-star-half-stroke" style={{color:'#FFA41C'}}></i>
                  </span>
                  </div>
                </div>
                <div className="d-flex mb-4 justify-content-center">
                  {/* <div className='d-flex gap-2'>
                      <Button style={{backgroundColor:'#ffcc66',borderColor:'#fff',color:'#000',fontWeight:'bold'}} disabled={item.count === 0} onClick={()=>decrement(index)}>-</Button>
                        <span className='d-flex align-items-center'>{item.count}</span>
                      <Button style={{backgroundColor:'#ffcc66',borderColor:'#fff',color:'#000',fontWeight:'bold'}} onClick={()=>increment(index)}>+</Button>
                  </div> */}
                  <Button style={{backgroundColor:'#ffcc66',border:'1px solid #a6a6a6',color:'#000',fontWeight:'bold'}} onClick={()=>props.onAddToCart(item)}>
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

export default Grocery;