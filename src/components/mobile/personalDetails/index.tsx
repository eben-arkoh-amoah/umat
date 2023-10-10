import React from "react";
import styled from "styled-components";
import SelectNationality from "../../Selectnationality";
import money from "../../../images/money-576443.svg"
import { MapInputs } from "../../../utils/functions/map";
import { personal } from "../../../utils/strings/login/personal";
import { useNavigate } from "react-router-dom";
import { Button } from "../../button";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 140%;
gap: 30px;

.nationality{
    width: 100%;

    input{
        width: 50px;
    }

    label{
       color: #03453F;
    }
}

.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
 
    .button{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
  
    select{
        margin: auto;
        background: white;
    }
}
`
export const Pricing = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 70%;

p{
display: flex;
flex-direction: row;
gap: 20px;
width: 80%; 
}

img{
    width: 50%;
    max-width: 70px;
    heigth: 50px;
}
`

export function MobilePersonalInfo() {
    const navigate = useNavigate();
    console.log("hello world");
    const personalInfo = {
        content: personal
    };
    return (
        <Wrapper>
           <div className="nationality"><SelectNationality /></div>
            <Pricing>
                <p><span><b>COST :  120 GHS</b></span></p>
                <img src={money} alt="money" />
            </Pricing>
            <div className="form">
                {
                    MapInputs(personalInfo)
                }
                <div className="button">
                     <Button text="Check out" background="#009688" color="white" width={200} weight="bold" onClick={() => {navigate("/buy-pin/payment")}} />
                </div>
            </div>

        </Wrapper>
    )
}