import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  font-size: 33px;
  font-weight: bold;
  width: 60px;
  height: 60px;
  border: none;
  display: inline-block;
  box-shadow: 2px 2px 7px 0.7px black;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 4px 14px 1.2px black;
    transform: scale(1.15) rotate(-4.5deg);
  }
`;
