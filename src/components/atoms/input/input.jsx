import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput placeholder={placeholder} type="text"></SInput>;
};

const SInput = styled.input`
  border-radius: 5px;
  width: 200px;
  border: 2.5px solid hsla(0, 0%, 100%, 0.8);
  padding: 12px 7px;
  box-shadow: 0 3px 3px rgb(0 0 0 / 38%);
  margin-bottom: 10px;
`;
