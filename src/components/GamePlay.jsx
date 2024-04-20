import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { Button, OutlineButton } from "./styled/Button";
import { useState } from "react";
// import Rules from "./Rules";
const GamePlay = () => {
  const resetScore = () => {
    setScore(0);
  };
  const [score, setScore] = useState(0);
  const [showRules, setshowRules] = useState();
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  // roll dice
  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice roleDice={roleDice} currentDice={currentDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setshowRules(prev=>!prev)}>
          {showRules ? "Hide " : "Show "}Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};
const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    /* background-color: yellow; */
    align-items: center;
  }
  .btns {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    /* max-width: 220px; */
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
export default GamePlay;
