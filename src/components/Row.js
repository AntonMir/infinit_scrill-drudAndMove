import React from 'react'
import styled from 'styled-components'

export default function Row({...post}) {

    return (
        <RowStyled>
            <div>{post.id}</div>
            <p>{post.title}</p>
        </RowStyled>
    )
}

const RowStyled = styled.div`
    border: 1px green solid;
    padding: 10px;
    margin: 10px;
`
