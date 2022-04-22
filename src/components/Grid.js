import React from 'react'
import { Wrapper } from './Grid.styles';
import { Content } from './Grid.styles';

const Grid = ({header,children}) => {
  return (
    <Wrapper>
        {header}
        <Content>
        {children}
        </Content>
    </Wrapper>
  )
}

export default Grid