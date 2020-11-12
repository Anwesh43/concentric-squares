import React from 'react'
import { useStyle } from './hooks'

const Square = ({style}) => {
    return (
        <div style = {style}>
        </div>
    )
} 

const ConcentricSquares = ({w, h, scale}) => {
    const { parentStyle, squareStyle} = useStyle(w, h, scale)
    return (
      <div style = {parentStyle()}>
          {[0, 1, 2, 3, 4].map((i) => (<Square key = {`square_${i}`} style = {squareStyle(i)}/>))}
      </div>
    )
}

export default ConcentricSquares