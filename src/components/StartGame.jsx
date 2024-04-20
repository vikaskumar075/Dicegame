import React from 'react'
import styled from 'styled-components';
import { Button } from './styled/Button';
const StartGame = (props) => {
    const{toggle}=props;
  return (
    <Container>
    <div>
    <img src="/images/dices_1.png"/>
    </div>
    <div className='content'>
    <h1> DICE GAME</h1>
    <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>
  )
}
const Container=styled.div`
max-width:1180px;
display: flex;
justify-content: center;
align-items: center;
gap: 110px;
height: 100vh;
.content{
    h1{
 font-size: 96px;
 white-space: nowrap;
 
    }
}
`;
export default StartGame;
