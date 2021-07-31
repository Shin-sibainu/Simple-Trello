import React from "react";
import styled from "styled-components";
import { AddButton } from "../atoms/button/AddButton";
import { Header } from "../atoms/layout/Header";
import { Input } from "../atoms/input/Input";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Header />

        <SButtonDiv>
          <AddButton>＋</AddButton>
        </SButtonDiv>

        <div>
          <STasksFlexDiv></STasksFlexDiv>
        </div>

        <Input></Input>
      </div>
    </>
  );
};
export default Home;

const SButtonDiv = styled.div`
  text-align: center;
  margin: 32px auto;
`;

const STasksFlexDiv = styled.div`
  display: flex;
`;
