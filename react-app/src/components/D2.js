import React from 'react'
import D3 from './D3'
import { createContext } from 'react'
var Msg = createContext()
const D2 = () => {
  return (
    <>
        <Msg.Provider value='Today is Good day'>
            <D3/>
        </Msg.Provider>
    </>
  )
}

export default D2
export {Msg}