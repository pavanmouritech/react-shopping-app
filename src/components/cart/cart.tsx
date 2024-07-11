import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../../App.css';
import 'react-bootstrap';

const Cart = (props: any) => {

    const [card, setCard] = useState([...props.items]);
    const [total, Settotal] = useState(0);


    const increment = (index: any) => {
        const IncrCount = [...card];
        IncrCount[index]['count'] = IncrCount[index]['count'] + 1;
        setCard(IncrCount);
        Settotal(total + IncrCount[index]['price']);
    }

    const decrement = (index: any) => {
        const DecCount = [...card];
        DecCount[index]['count'] = DecCount[index]['count'] - 1;
        setCard(DecCount);
        Settotal(total - DecCount[index]['price']);
    }

    const RemoveItem = (index: any) => {
        console.log('index', index);
        let RemoveItem = [...card]
        RemoveItem[index]['count'] = 0;
        Settotal(total - RemoveItem[index]['finalPrice']);
        setCard(RemoveItem);
    }

    return (
        <>
            <div className="card bg-light shadow mt-3 container-fluid">
                <div className='card-header'>
                    <span><b>Your Order Detailes..!!</b></span>
                </div>
                {card ? card.map((item: any, index: any) => {
                    return <div className="row">
                        <div className="col-sm text-white">
                            <img src={item.image} style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="col-sm  py-3 text-black">
                            <div className='row'>
                                <span className='title mt-4'>{item.title}</span>
                                <span className='mt-4'>{item.category}</span>
                            </div>
                        </div>
                        <div className="col-sm mt-5 py-3 text-black">
                            <span><b>$ {item.price}</b></span>
                        </div>
                        <div className="col-sm mr-5">
                            <div className='col-sm mr-5'>
                                <div className="py-5 mt-2 d-flex gap-2" aria-label="Second group">
                                    <span className='mt-2'><b>Qty :</b></span>
                                    <div className='d-flex gap-2'>
                                        <Button style={{ backgroundColor: '#ffcc66', borderColor: '#fff', color: '#000', fontWeight: 'bold' }} disabled={item.count === 0} onClick={() => decrement(index)}>-</Button>
                                        <span className='d-flex align-items-center'>{item.count}</span>
                                        <Button style={{ backgroundColor: '#ffcc66', borderColor: '#fff', color: '#000', fontWeight: 'bold' }} onClick={() => increment(index)}>+</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 py-2 col-sm">
                            <Button variant="outline-danger" onClick={() => RemoveItem(index)}>Remove Item</Button>
                        </div>
                    </div>
                }) : null
                }
                <div className="p-4 d-flex justify-content-between card-footer">
                    <span><b>Total(USD)</b></span>
                    <span><b>$ {total}</b></span>
                </div>
                <div className="d-grid">
                    <Button type="button" variant="success">
                        Payment
                    </Button>
                </div>
            </div></>
    );
}

export default Cart;