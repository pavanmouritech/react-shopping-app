import Header from '../header/header';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Cart from '../cart/cart';
import { useNavigate } from 'react-router-dom';
import Result from '../result/result';
import TabGroups from '../cart/tabgroups/tabgroups';
import Grocery from '../grocery/grocery';


const products = [
  [
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
  ],
  [
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
]


export interface cartItem {
  id: number,
  title: string,
  category: string,
  price: number,
  image: string,
  count: number,
  finalPrice: number,
}

const Dashboard = (props: any) => {
  const navigate = useNavigate();
  const [text, SetText] = useState('');
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [Products, setProducts] = useState(products[0]);
  // const [filterTextValue, updateFilterText] = useState(props.ProductItems);
  const [ProductsItems, setProductsItems] = useState(props.foundProducts)
  const [filterData, setFilterdata] = useState([])

  // const res = [...filterTextValue]
  // console.log('allchecked', res);

  const setCategory = (index: any) => {
    setProducts(products[index]);
    console.log('index', index);
  }

  const onAddToCart = (item: any) => {
    let arr: cartItem[] = [...cartItems]
    arr.push(item);
    setCartItems(arr)
    console.log('finalData', arr);
  };

  const setFilter = (text: any) => {
    //console.log('text', text);
    SetText(text);
  }

  const [cart, setCart] = useState(false);
  const clickOnCart = (isClick: boolean) => {
    setCart(isClick);
  }


  const filterProductList = () => {
    console.log('--------------');
    // let array:any = []
    // filterTextValue.forEach((el:any) => {
    //  let result;
    //   if(el.isChecked){
    //      result = Products.filter((product: any) => {
    //       return product.category === filterTextValue.name;
    //     });
    //   }
    //   array.push(result);
    //   setProducts(result);
    // });

    // console.log(array)  

    // filterTextValue.filter((element:any) => {
    //   console.log('isChecked',element.isChecked);
    //   // if(element.isChecked === true){
    //   //   const result = Products.filter((el)=>{
    //   //       return el.category === filterTextValue.name;
    //   //   });
    //   //   setProducts(result);
    //   // }
    // });

    // if(filterTextValue === 'isChecked'){
    //   return product.category === 'true';
    // }else if(filterTextValue === 'isChecked'){
    //   return product.category === 'false';
    // }else{
    //   return product;
    // }
  };


  const productsItem = (items: any) => {
    console.log(items);

    setProductsItems(items);

    ProductsItems.forEach((element: any) => {
      let item: any = [];
      if (element.isChecked == true) {
        Products.forEach((el) => {
          if (el.category == element.name) {
            item.push(el);
          }
        });
      }
      console.log(item);
      setFilterdata(item);
    });
  }

  return (
    // <>
    //   {!cart ?
    //     <><div>
    //       <Header setFilter={setFilter} count={cartItems.length} clickOnCart={clickOnCart} />
    //     </div>
    //       <div>
    //         <TabGroups setCategory={setCategory} />
    //       </div>
    //       <div className='row'>
    //         <div className='col-md-2'>
    //           <Sidebar productsItem={productsItem} handleClick={props.handleClick} />
    //         </div>
    //         <div className='col-md-10'>
    //           <Result text={text} onAddToCart={(item: any) => onAddToCart(item)} product={filterProductList}/>
    //         </div>
    //       </div>
    //     </> :
    //     <Cart items={cartItems}></Cart>}
    // </>
    <div>
      <div>
        <Header setFilter={setFilter} count={cartItems.length} clickOnCart={clickOnCart} />
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <Sidebar productsItem={productsItem} handleClick={props.handleClick} />
        </div>
        <div className='col-md-10'>
          {/* <Result text={text} onAddToCart={(item: any) => onAddToCart(item)} product={props.selectedProducts} /> */}
          <Grocery />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
