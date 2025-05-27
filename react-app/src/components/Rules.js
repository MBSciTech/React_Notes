import pic from './images/93bf185d2315f632597a0de7bcc39846.jpg'
function Rules() { 
    var name = 'Maharshi'
    var s = {
        color:'purple',
        backgroundColor : 'pink',
        fontSize : '50px'
    };
    
    return (<>
            <h1> Namaste 5*10 =  {5*10}</h1>
            <h2 style={s}>Some Fancy Text</h2>
            <img src={pic} alt='ANime'/> 
        </>
    );
}

export default Rules