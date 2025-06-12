import axios from 'axios';
import { useState,useEffect } from 'react';

function Axiosdemo(){
    useEffect(()=>{
        axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>setImage(res.data.message)).catch((err)=>console.log(err));
        axios.get('https://catfact.ninja/fact').then((res)=>setCatTxt(res.data.fact)).catch((err)=>console.log(err));
        axios.get('https://official-joke-api.appspot.com/random_joke').then((res)=>setPunchLine(res.data.punchline)).catch((err)=>console.log(err));
        axios.get('https://official-joke-api.appspot.com/random_joke').then((res)=>setSetUp(res.data.setup)).catch((err)=>console.log(err));
    },[]
    );
    
    const [image,setImage] = useState('');
    const [catTxt,setCatTxt] = useState('');
    const [setUp,setSetUp] = useState('');
    const [punchLine,setPunchLine] = useState('');

    return(
        <>
            <img src={image} alt='dogs' width={300} height={300}/>
            <p>{catTxt}</p>
            <p>Setup : {setUp}</p>
            <p>Punch line : {punchLine}</p>
            <br/>
            <button onClick={()=>{
                axios.get('https://catfact.ninja/fact').then((res)=>setCatTxt(res.data.fact)).catch((err)=>console.log(err));
                axios.get('https://official-joke-api.appspot.com/random_joke').then((res)=>setPunchLine(res.data.punchline)).catch((err)=>console.log(err));
                axios.get('https://official-joke-api.appspot.com/random_joke').then((res)=>setSetUp(res.data.setup)).catch((err)=>console.log(err));
            }}>Change</button>
        </>
    )
}

export default Axiosdemo;