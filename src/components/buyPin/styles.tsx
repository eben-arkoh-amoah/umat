import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 20px;

  h1 {
    color: #62f0e4;
    font-size: 25px;
    line-height: 25px;
    margin: auto;
    display: flex;
    align-self: center;
    justify-self: center;
    width: 35%;

    @media (max-width: 600px){
      width: 140%;
      font-size: 20px;
      margin: 30px 0 0;
      display: flex;
        justify-self: center;
        justify-content: center;
    }
  }
`;

export const SectionContainerCard = styled.div`
  background-color: #dcf4f2;
  width: 90%;
  min-height: 68vh;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 10px 35px;

  .max{
    width: 100%;
    font-size: 15px;
  }
 @media (max-width : 600px){
  width: 145%;
  background: inherit;
  box-shadow: none;
 }

`;

export const BigCard = styled.div`
  background-color: white;
  padding: 10px 0px;
  width: 60%;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;

   @media (max-width : 600px){
   width: 100%;
   background: inherit;
   box-shadow: none;
 }
`;

export const SmallCard = styled.div`
  background-color: white;
  height: 40vh;
  width: 35%;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px){
   display: none;
  }
`;

export const Amount = styled.h2`
  color: #000000;
  font-size: 25px;
  text-align: center;
`;
