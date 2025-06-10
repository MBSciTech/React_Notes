import React from 'react'
import { useContext } from 'react'
import { Msg,Msg2 } from './Parent.js'

const C2 = () => {
  var m1 = useContext(Msg);
  var m2 = useContext(Msg2);
  return (
    <>
      <h1>{m1}</h1>
      <h1>{m2}</h1>
    </>
  )
}

export default C2