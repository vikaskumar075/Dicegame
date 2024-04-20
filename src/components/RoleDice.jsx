import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({roleDice,currentDice}) => {
  

  
  return (
    <DiceController>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceController>
  );
};
const DiceController = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  img {
    width: 150px;
  }
  .dice {
    cursor: pointer;
  }
`;

export default RoleDice;
