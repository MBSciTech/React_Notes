import {  useReducer, useState } from "react";

function Hreduce() {
    const [fdata, fchg] = useState({});

    function reducer(count, setCount) {
        if (setCount.type === "inc") {
            return count + 1;
        }

        if (setCount.type === "dec") {
            return count - 1;
        }

        if (setCount.type === "add") {
            return count + parseInt(fdata.num || 0);
        }

        if(setCount.type === 'reset') {
            return 0
        }

    }

    const [count, setCount] = useReducer(reducer, 0);

    var s1 = {
        justifyContent: "center", display: "grid" ,
        padding : '10px',
        gap : '10px'
    }
    var s2 = {
        fontFamily : 'Arial',
        fontSize : '20px',
        fontWeight : 'bold'
    }

    return (
        <div style={s1}>
            <p style={s2}>Count: {count}</p>
            <div>
            <button onClick={() => setCount({ type: "inc" })}>INCREASE</button>  
            <button onClick={() => setCount({ type: "dec" })}>DECREASE</button> 
             <button onClick={() => setCount({type:'reset'})}>Reset</button>
            </div>

            <form>
            <input
                type="number"
                name="num"
                id="num"
                onChange={(e) => fchg({ ...fdata, [e.target.name]: e.target.value })}
            />
            <button onClick={() => setCount({ type: "add" })}>
                Add {fdata.num}
            </button>
            </form>
        </div>
    );
}

export default Hreduce;
