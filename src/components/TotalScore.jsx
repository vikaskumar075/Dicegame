import React from "react";
import styled from "styled-components";
const TotalScore = ({ score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`

  max-width: 200px;
  text-align: center;
 /* background-color: yellow; */
 margin-top:-10px ;
  h1 {
    font-size: 70px;
    line-height: 90px;
    margin-top: -10px;
    font-weight: bold;
  }
  p {
    margin-top: -50px;
    font-size: 24px;
    font-weight: 500;
  }
`;

export default TotalScore;
