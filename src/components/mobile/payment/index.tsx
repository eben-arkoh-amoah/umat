import React from "react";
import styled from "styled-components";
import PaymentOptions from "../../buyPin/GhanaianStudent/payments/PaymentOptions";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

export const PaymentOptionsContainer = styled.div`
width: 100%;
background: blue;
`

export function MobilePayment() {
    
    return (
        <Container>
            <PaymentOptionsContainer>
                {/* <PaymentOptions  /> */}
            </PaymentOptionsContainer>
        </Container>
        
    )
}
