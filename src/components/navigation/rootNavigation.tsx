import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import SignIn from "../signinpage/signin";
import SignUp from "../signupPage/signup";
import Cart from "../cart/cart";


const RootNavigation = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/Cart" element={<Cart />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RootNavigation;