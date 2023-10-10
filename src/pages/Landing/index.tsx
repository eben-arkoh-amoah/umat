import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header";
import { Outlet } from "react-router-dom";
import { MobileHeader } from "../../components/mobile/header";

export const Main = styled.main`
background-color: #0A7C72;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 15px 30px;
min-height: 83vh;

@media (max-width: 600px){
    background-image: linear-gradient(#0A7C72, white);
}
`
export const Landing = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 100vh;
`

export function LandingPage() {
  const device = window.innerWidth;
    
    return (
        <div>
            {
               device > 700 ?  <Header /> : <MobileHeader />
            }
            <Main>
            <Outlet />
           </Main>
        </div>
    )
}