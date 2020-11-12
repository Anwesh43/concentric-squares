import {useState, useEffect} from 'react'
import {divideScale, sinify} from './utils'

const sizeFactor = 8 
const squares = 5 

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = 0
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setAnimated(false)
                        setScale(0)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / sizeFactor 
    const position = 'absolute'
    const x = w / 2
    const y = h / 2 
    const sf = sinify(scale)
    const border = `1px solid indigo`
    return {
        parentStyle() {
            const left = `${w / 2}px`
            const top = `${h / 2}px`
            return {
                position, 
                left, 
                top
            }
        },
        squareStyle(i) {
            const sfi = divideScale(sf, i, squares)
            const currSize = (size / (i + 1)) * sfi
            const left = `${-currSize / 2}px`
            const top = `${-currsize / 2}px`
            const width = `${currSize}px`
            const height = `${currSize}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height,
                border
            }
        }
    }
}