//create 3 components D1 D2 D3 
//1. D1 has Context related to css style
//2. D2 has some message = Today is Good day.
//3. D3 displays the message given by D2 in style given by D1. 

// import { create } from 'domain'
import React from 'react'
import {createContext} from 'react'
import D2 from './D2'
var Style = createContext();
const D1 = () => {
  return (
    <>
        <Style.Provider value={{color: 'red'}}>
            <D2/>
        </Style.Provider>
    </>
  )
}

export default D1
export {Style}