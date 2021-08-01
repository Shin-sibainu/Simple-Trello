import React from "react";
import styled from "styled-components";
import { AddButton } from "../atoms/button/AddButton";
import { Header } from "../atoms/layout/Header";
import { Input } from "../atoms/input/Input";
import { TaskCard } from "../organisms/TaskCard";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Header />

        <SButtonDiv>
          <AddButton>＋</AddButton>
        </SButtonDiv>

        <div>
          <STasksFlexDiv>
            <TaskCard h4={"task1"}></TaskCard>
            <TaskCard h4={"task1"}></TaskCard>
          </STasksFlexDiv>
        </div>
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
  margin: 10px 7%;
  display: flex;
  justify-content: left;
`;
