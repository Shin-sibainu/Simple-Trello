import React from "react";
import styled from "styled-components";
import Card from "../atoms/card/Card";
import { Input } from "../atoms/input/Input";

const style = {
  fontSize: 20,
  fontWeight: 900,
  margin: 15,
  padding: 0,
  fontWeight: 900,
};

export const TaskCard = (props) => {
  const { h4 } = props;
  return (
    <STaskCardContainer>
      <h4 style={style}>{h4}</h4>
      <hr style={{ color: "gray" }} />
      <Input placeholder={"add your task"}></Input>
      <Card h3={"読書"}></Card>
      <Card h3={"読書"}></Card>
    </STaskCardContainer>
  );
};

const STaskCardContainer = styled.div`
  text-align: center;
  border: 0.1px solid white;
  width: 250px;
  color: #463d3d;
  background-color: white;
  box-shadow: 0 3px 6px rgb(0 0 0 / 23%);
  margin-left: 15px;
`;
