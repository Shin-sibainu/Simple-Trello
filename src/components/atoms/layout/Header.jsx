import styled from "styled-components";
import { Link, MemoryRouter } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <SH1>
        <MemoryRouter>
          <SLink to="/">Simple Trello</SLink>
        </MemoryRouter>
      </SH1>
      <nav classSLiName="pc-nav">
        <MemoryRouter>
          <SUl>
            <SLi>
              <A href="#">Contact</A>
            </SLi>
            <SLi>
              <A href="https://github.com/Shin-sibainu">GitHub</A>
            </SLi>
            <SLi>
              <A href="https://twitter.com/Shin_Engineer">Twitter</A>
            </SLi>
          </SUl>
        </MemoryRouter>
      </nav>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  padding: 16px 40px;
  background-color: #58a0b3;
  top: 0;
  display: flex;
  align-items: center;
  border: 1px solid #615858;
`;

const SH1 = styled.h1`
  font-size: 33px;
  padding: 0;
  margin: 0;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #4b4b4b;
`;

const A = styled.a`
  text-decoration: none;
  color: #4b4b4b;
`;

const SUl = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
`;

const SLi = styled.li`
  margin-left: 15px;
  font-size: 24px;
`;
