import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './Home';
import Contact from "./Contact";
import Product1 from "../components/Product1";

function Main() {
    return(
        <>
            <BrowserRouter>
                <Link to='/'>Home</Link>
                <Link to='/Contact'>Contact us</Link>
                <Link to='/Products'>Product1</Link>
                <Routes>
                    <Route path="/"></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                    <Route path="/Products" element={<Product1/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Main;