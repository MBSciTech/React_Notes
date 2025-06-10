import React from 'react'
import {useContext} from 'react'
import { Style } from './D1'
import { Msg } from './D2'
const D3 = () => {
var css = useContext(Style);
var msg = useContext(Msg);
  return (
    <>
        <h1 style={css}>
            {msg}
        </h1>
    </>
  )
}

export default D3