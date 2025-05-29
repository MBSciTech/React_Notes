//Write a heading on top with blue color and font size 20px. 
//Font size must become 50px in 5 seconds 
//In h2 tag display only current date. 
//In h3 tag display only current time. 
//Create an ordered list fruits starting from 'C'.
//Display an image present in images folder of src folder.

import pic from '../images/a1.jpg'

function P1() {
    return (
        <>
            <h1>LJKU</h1>
            <h2>Current Date: {new Date().toLocaleDateString()}</h2>
            <h3>Current Time: {new Date().toLocaleTimeString()}</h3>
            <ol start='3' type='A'>
                <li>Cherry</li>
                <li>Banana</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>Mango</li>
            </ol>
            <img src={pic} alt="Image1" />
        </>
    )
}

export default P1;