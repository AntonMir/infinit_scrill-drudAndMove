import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function Drug() {

    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 10, y: 10})



    const handleMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementY,
                y: position.y + event.movementX
            })
        }
    }

        // console.log('event.movementY', event.movementY)



        // setBlockPosition({top: event.clientY, left: event.clientX})
        // event.target.style.top = event.clientY
        // console.log('event.target.style.top', event.target.style.background)
        // event.target.style.background = 'pink'
        // event.target.style.left = event.clientX


    return (
        <Block 
            onMouseDown={() => setPressed(true)} 
            onMouseMove={handleMouseMove} 
            onMouseUp={() => setPressed(false)}
            // onMouseLeave={() => setPressed(false)}
            position={position}
        >
        </Block>
    )

}


const Block = styled.div.attrs(props => ({
    style: {
        top: props.position.x + 'px',
        left: props.position.y + 'px',
    },
}))`
    position: absolute;
    height: 200px;
    width: 200px;
    background-color: red;
    z-index: 999;
    border-radius: 50%;
`
