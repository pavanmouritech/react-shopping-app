import { useState } from 'react';
import { Col, Form, Nav } from 'react-bootstrap';

let ProductItems = [
  {
    "name": "Grocery",
    "isChecked": false
  },
  {
    "name": "Mobiles",
    "isChecked": false
  },
]

const Sidebar = (props:any) => {
  const [selectedFilters, setSelectedFilters] = useState([]);


  const onfilterChangedValue = (event:any,index:any) => {

    console.log('value',index);
    let res = [...ProductItems];

      if(res[index]['isChecked']){
        res[index]['isChecked'] = false;
        console.log('unChecked',res);
      }else{
        res[index]['isChecked'] = true;
        console.log('isChecked',res);
      }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='min-vh-100' style={{ backgroundColor: '#d9d9d9' }}>
          <Nav className='mt-4'>
            <div className='ml-2'>
              <span>Product Items</span>
              <Col>
                <div className='mt-2'>
                {ProductItems.map((key:any,index:any) => {
                  return key['isChecked']
                })}
                  {ProductItems.map((key:any,index:any) => {
                    return <Form.Check
                      type="checkbox" label={key['name']} name="checkbox"
                      value={key['isChecked']}
                      // checked={key['isChecked']}
                      onClick={() => {onfilterChangedValue(key,index)}}
                    >
                    </Form.Check>
                  })}
                </div>
              </Col>
            </div>
            <div className='ml-2'>
              {/* <span>Mobile Items</span> */}
              <Col>
                <div className='mt-2'>
                  {/* <Form.Check
                    type="checkbox" label="Redmi" name="checkbox"
                    value="Redmi"
                    onClick={() => props.filterResult("Redmi")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="OnePlus" name="checkbox"
                    value="OnePlus"
                    onClick={() => props.filterResult("OnePlus")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="Samsung" name="checkbox"
                    value="Samsung"
                    onClick={() => props.filterResult("Samsung")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="Realme" name="checkbox"
                    value="Realme"
                    onClick={() => props.filterResult("Realme")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="Motorola" name="checkbox"
                    value="Motorola"
                    onClick={() => props.filterResult("Motorola")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="OPPO" name="checkbox"
                    value="OPPO"
                    onClick={() => props.filterResult("OPPO")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="Vivo" name="checkbox"
                    value="Vivo"
                    onClick={() => props.filterResult("Vivo")}
                  >
                  </Form.Check>
                  <Form.Check
                    type="checkbox" label="Apple" name="checkbox"
                    value="Apple"
                    onClick={() => props.filterResult("Apple")}
                  >
                  </Form.Check> */}
                </div>
              </Col>
            </div>
          </Nav>
        </div>
      </div>
    </div>
  );
}


export default Sidebar;