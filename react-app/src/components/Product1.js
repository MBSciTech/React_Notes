import Product2 from './Product2';
import pic1 from '../images/shampoo1.jpg';
import pic2 from '../images/shampoo2.jpg';
import pic3 from '../images/shampoo3.jpg';

function Product1(){
    var products = [
        {
            pname : 'Apple Fresh Shampoo',
            pic : pic1,
            price : '₹7000'
        },
        {
            pname : 'Sunsilk Stunning Black',
            pic : pic2,
            price : '₹2499'
        },
        {
            pname : 'Keratin Hair care',
            pic : pic3,
            price : '₹4999'
        },
    ];
    return(
        <>
            <Product2 products = {products}/>
        </>
    );
}

export default Product1