import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { h3 } = props;
  return (
    <SCard>
      <h3>{h3}</h3>
      <div style={{ cursor: "pointer" }}>✔</div>
    </SCard>
  );
};
export default Card;

const SCard = styled.div`
  background-color: rgb(202, 255, 222);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  width: 213px;
  height: 55px;
  border: 2.5px solid hsla(0, 0%, 100%, 0.8);
  box-shadow: 0 3px 3px rgb(0 0 0 / 38%);
  margin-bottom: 10px;
  border: none;
`;
