import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput placeholder={placeholder} type="text"></SInput>;
};

const SInput = styled.input``;
