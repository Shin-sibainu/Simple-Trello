import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const AddButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #ce1c3a;
  border-radius: 50%;
`;
