//Recive props from Prop1.js


function Prop2(props){
    return(
        <>
            <p>
                {props.color},
                {props.price},
                {props.car}
            </p>
        </>
    )
}

export default Prop2;