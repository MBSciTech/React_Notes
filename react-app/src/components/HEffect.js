import { useState } from 'react';
import {useEffect} from 'react';

function HEffect(){
    // useEffect(() => alert("I am Executed only on mount"),[])
    const [count,setCount] = useState(0);
    const [txt,setTxt] = useState('Hello');
    useEffect(() => alert("I am Executed only for button 1"),[count])

    var s1 = {
        padding : '20px',
        gap : '20px'
    }
    return(
        <>
            <div style={s1}>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
            <button onClick={()=>setTxt(txt==='Hello'?'Good':'Hello')}>Change Text {txt}</button>
            </div>

        </>
    )
}

export default HEffect