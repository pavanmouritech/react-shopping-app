import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import '../../../App.css';


const TabGroups = (props:any) =>{

    return(
        <div>
            <Navbar style={{ marginTop: '-16px', backgroundColor: '#232f3e' }}>
                <div className='mt-3'>
                    <span style={{ marginLeft: '100px', color: '#fff' }}>Category</span>
                    <a className="ml-5" style={{backgroundColor:'Tomato'}} onClick={()=>(props.setCategory(0))}>Grocery</a>
                    <a className="ml-5" style={{backgroundColor:'Tomato'}} onClick={()=>(props.setCategory(1))}>Mobiles</a>
                </div>
            </Navbar>
        </div>
    );
}

export default TabGroups;