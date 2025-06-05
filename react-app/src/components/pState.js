import { useState } from "react";

function PState() {
    var [text1, setText1] = useState("LJ University");
    var [text2, setText2] = useState("React JS Hooks");
    var [color, setColor] = useState("green");
    var [pres, setPre] = useState("Hide");
    function chgText(){
        setText1(text1==='LJ University' ? 'Welcome Student' : 'LJ University');
    }

    function chgColor(){
        setColor(color === 'green' ? 'blue' : 'green');
    }

    function HideOrShow(){
        if(pres==='Hide'){
            setPre('show');
            setText2('');
        }else{
            setPre('Hide');
            setText2('React JS Hooks')
        }
    }

    return(
        <>
            <h1 style={{color:color}}>
                {text1}
            </h1>
            <h2>{text2}</h2>
            <button onClick={chgText}>Change Text</button>
            <button onClick={chgColor}>Change Color</button>
            <button onClick={HideOrShow}>Hide or Show</button>

        </>
    )
}

export default PState;