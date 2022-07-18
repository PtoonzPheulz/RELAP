import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
    backkground: yellow;
    padding: 1rem 2rem;
    border-radius: 20px;
`

function Button({name}) {
  return (
    <Style>
        <div>
            <button>{name}</button>
        </div>
    </Style>
  )
}

export default Button