//Recive props from Prop1.js
//Child


function Prop2(props){
    var arr = props.car
    return(
        <>
                {/* {props.color},*/}

                {/* Product : {props.car.product}<br/>
                Color : {props.car.color}<br/>
                Price : {props.car.price}<br/> */}
                {arr.map((v)=><>
                    <hr/>
                    <h1>Product : {v.product}</h1>
                    <h3>Color : {v.color}</h3>
                    <h3>Price : {v.price}</h3>
                    <hr/>
                </>)}
        </>
    )
}

export default Prop2;