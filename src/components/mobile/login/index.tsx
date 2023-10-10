import react from "react";
import styled from "styled-components";
import { MapInputs } from "../../../utils/functions/map";
import { login } from "../../../utils/strings/login/landing";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 25px;

p{
    color: #03453F;
    font-size: 14px;
    line-height: 18px;
    width: 70%;
}

form{
    legend{
        margin-bottom: 25px;
        color: #03453F;
        text-align: center;
    }

    fieldset{
        display: flex;
        flex-direction: column;
        gap: 20px;

        label{
            color: #03453F;
        }
    }
}
`
export function MobileLogin() {
    const LoginFields = {
        content: login
    };

    return (
        <Container>
            <p>Do you already have login credentials?</p>
            <form>
                <legend><b>LOGIN</b></legend>
                <fieldset>
                {
                    MapInputs( LoginFields)
                    }
               </fieldset>     
            </form>
        </Container>
    )
}