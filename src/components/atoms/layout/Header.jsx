import styled from "styled-components";
import { Link, MemoryRouter } from "react-router-dom";

export const Header = () => {
    return(
        <SHeader>
            <SH1>
                <MemoryRouter>
                <SLink to="/">Simple Trello</SLink>
                </MemoryRouter>
            </SH1>
            <nav classSLiName="pc-nav">
            <MemoryRouter>
                <SUl>
                    <SLi><SLink href="#">Contact</SLink></SLi>
                    <SLi><SLink href="#">GitHub</SLink></SLi>
                    <SLi><SLink href="#">Developer</SLink></SLi>
                </SUl>
                </MemoryRouter>
            </nav>
        </SHeader>
    );
};

const SHeader = styled.header`
    width: 100%;
    padding: 24px 40px;
    background-color: #d6cfcf;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
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

const SUl = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
`;

const SLi = styled.li`
    margin-left: 15px;
    font-size: 24px;
`;