import React from "react";
import styled from "styled-components";
import brand from "../../../images/brand.png";
import { FaAlignJustify } from "react-icons/fa";
import uk from "../../../images/uk2.jpg";

export const LanguageContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 20%;
margin-right: 10px; 
width: 50px;
 img{
    width: 20px;
    height: 20px;
 }

 select{
    background: rgba(225, 225, 225, 0);
    color: #62F0E4;
    width: 60px;
    font-size: 12px;
    option{
        color: white;
    }
 }
`

export function Language() {
    
    return (
        <LanguageContainer>
            <select>
                <option value="English">English</option>
                <option value="French">French</option>
            </select>
        </LanguageContainer>
    )
}


export const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2% 0%;
gap: 5%;
width: 100%;
background: #03453F;
`

export const ImageContainer = styled.div`
width: 50%;
margin: auto;
`

export const BrandContainer = styled.div`
display: flex;
flex-direction: column;
color: #62F0E4;
align-item: center;
font-size: 12px;
font-weight: bold;
width: 39%;
text-align: center;

p{
    width: 100%;
}
`

export const ActionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
gap: 20px;
width: 50%;

div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
`

export const Help = styled.p`
height: 30px;
width: 30px;
border-radius: 50%;
background: #62F0E4;
font-size: 14px;
font-weight: bold;
color: #03453F;
text-align: center;
padding-top: 7px;
cursor: pointer;
`
export const Menu = styled.div`
width: 30px;
cursor: pointer;
`

export function MobileHeader() {
    
    return (
        <Header>
            <BrandContainer>
                <ImageContainer>
                  <img src={brand} alt="umat" />
                </ImageContainer>
               <p>University  of Science and Technology</p>
            </BrandContainer>
            <ActionsContainer>
                <Language />
                <div>
                  <Help>?</Help>
                  <Menu> 
                    <FaAlignJustify width={"20%"} color="#62F0E4" font-weight="bold"/>
                  </Menu>
               </div>
            </ActionsContainer>
        </Header>
    )
}