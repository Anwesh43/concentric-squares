import React from 'react'
import { useStyle } from './hooks'

const Square = ({style}) => {
    return (
        <div style = {style}>
        </div>
    )
} 

const ConcentricSquares = ({w, h, scale, onClick}) => {
    const { parentStyle, squareStyle} = useStyle(w, h, scale)
    return (
      <div style = {parentStyle()} onClick = {onClick}>
          {[0, 1, 2, 3, 4].map(() => (<Square style = {squareStyle(i)}/>))}
      </div>
    )
}

export default ConcentricSquares