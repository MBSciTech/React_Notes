//Parent
import Prop2 from './Prop2';

function Prop1(){
    var c = [{
        product : 'car',
        color : 'red',
        price : '50'
    },
    {
        product : 'Bike',
        color : 'black',
        price : '20'
    }
    ]
    return(
        <>
        <Prop2 car = {c}/>
        {/* <Prop2 color='red'
               price='50'
               car = 'Ferrari'
        />

        <Prop2 color='black'
               car = 'BMW'
               
        /> */}
        
        </>
    )
}

export default Prop1;