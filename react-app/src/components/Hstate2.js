import a1 from '../images/a1.jpg';
import shampoo1 from '../images/shampoo1.jpg';
import shampoo2 from '../images/shampoo2.jpg';
import shampoo3 from '../images/shampoo3.jpg';
import { useState } from 'react';

function Hstate2(){
    var[i, setim] = useState(a1);
    var imgs = [a1,shampoo1,shampoo2,shampoo3];
    function chgim(){
        var ri = Math.floor(Math.random()*imgs.length);
        setim(imgs[ri]);
    }

    return(
        <>
            <img src= {i} alt='image not found'/>
            <button onClick={chgim}>Change image</button>
        </>
    )

}

export default Hstate2;