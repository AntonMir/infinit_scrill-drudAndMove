import React, { useEffect, useState } from 'react'
import Row from './Row'
import Drug from './Drug'
import styled from 'styled-components'

export default function List() {

    const [data, setData] = useState({})
    const [listSize, setListSize] = useState(20)
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 10, y: 10})

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?', {method: 'GET'})
        if(response.ok) {
            const data = await response.json()
            setData(data)
        } 
    }

    useEffect(() => {
        getData()
    }, [])

    const handleScroll = (event) => {
        
        if( event.target.scrollTop === event.target.scrollHeight - event.target.clientHeight ) {
            setListSize(listSize + 10)
        }

        // console.log('clientHeight', event.target.clientHeight ) // ds
        // console.log('scrollTop', event.target.scrollTop)
        // console.log('scrollHeight', event.target.scrollHeight)
        // console.log('offsetHeight', event.target.offsetHeight)


    }

    const handleMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementY, // сдвигание на 1 пиксель по y
                y: position.y + event.movementX // сдвиг на 1 пиксель по X
            })
        }
    }


  return (
        <ListStyled>
            <ListWrapper 
                onScroll={handleScroll}
                onMouseDown={() => setPressed(true)}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setPressed(false)}
                onMouseLeave={() => setPressed(false)}
                position={position}
            >
                {
                    data && data.length > 0 && data.map(post => {
                        if(data.indexOf(post, 0) < listSize) {
                            return <Row {...post} key={post.id}/>
                        } 
                        return null
                    })
                }
            </ListWrapper>

            <Drug />

        </ListStyled>
    )
}


const ListStyled = styled.div`
    position: relative;
    width: 1500px;
    height: 600px;
    margin: 50px auto;
    overflow: hidden;
    border: 1px #000 dashed;
`

const ListWrapper = styled.div.attrs(props => ({
    style: {
        top: props.position.x + 'px',
        left: props.position.y + 'px',
    }
}))`
    position: absolute;
    border: 2px solid gray;
    height: 400px;
    width: 600px;
    overflow-y: scroll;
`