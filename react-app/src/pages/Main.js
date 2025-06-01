import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// import Home from './Home';
import Contact from "./Contact";
import Product1 from "../components/Product1";  

function Main() {
    var s = {
        textDecoration: 'none',
        color : 'white'
    }
    return(
        <>
           <BrowserRouter>
            <nav>
                <ul>
                    <li><Link style={s} to='/'>Home</Link></li>
                    <li><Link style={s} to='/Contact'>Contact us</Link></li>
                    <li><Link style={s} to='/Products'>Products</Link></li>
                </ul>
            </nav>

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