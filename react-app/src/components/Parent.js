import React from 'react'
import C1 from './C1.js'
import {createContext} from 'react'
var Msg = createContext();
var Msg2 = createContext();
const Parent = () => {
    // var d = 'some important data';
  return (
    <>
    <Msg.Provider value = 'Har Har Mahadev'>
      <Msg2.Provider value = 'Om Namah Shivay'>
        <C1/>
      </Msg2.Provider>
    </Msg.Provider>
    </>
  )
}

export default Parent
export {Msg,Msg2} 