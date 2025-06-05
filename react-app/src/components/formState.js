//Create a componet that difines diffrant input fields using a single state object and displaces their value in realtime.
import { useState } from "react";
var h = [];

function FormState() {
    var [fdata, fchg] = useState({});
    function chg(e) {
        if(e.target.name==='hobby'){
            h.push(e.target.value + ",");
            var uniqueArr = [...new Set(h)];
            fchg({...fdata,[e.target.name]:h})

        }else{
            fchg({...fdata,[e.target.name]:e.target.value})
        }
    }
    return(
        <>
            <form>
                <label>First Name : <input type='text' onChange={chg} name="fname"/></label>
                <label>Last Name : <input type='text' onChange={chg} name="lname"/></label>
                <label>Email : <input type='email' onChange={chg} name="email"/></label>
                <br/>
                <label>Gender : 
                    <input type="radio" onChange={chg} name='gender' value={'Male'}/> Male
                    <input type="radio" onChange={chg} name='gender' value={'Female'}/> Female
                    <input type="radio" onChange={chg} name='gender' value={'Other'}/> Other
                </label>
                <br/>
                <label>
                    Hobbies : 
                    <input type="checkbox" onChange={chg} name='hobby' value={'Coding'}/>
                    <input type="checkbox" onChange={chg} name='hobby' value={'Reading'}/>
                    <input type="checkbox" onChange={chg} name='hobby' value={'Running'}/>
                    
                </label>
            </form>
            <table style={{border:'1px solid black'}} >
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email id</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                </tr>
                <tr>
                    <td>{fdata.fname}</td>
                    <td>{fdata.lname}</td>
                    <td>{fdata.email}</td>
                    <td>{fdata.gender}</td>
                    <td>{fdata.hobby}</td>
                </tr>
                
            </table>
        </>
    )
}

export default FormState;