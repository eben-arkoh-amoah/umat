import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styles from './styles';
import visa from '../../../../images/visa.png';
import momoLogo from '../../../../images/momoLogo.png';
import { Button } from '../../../button';
import PaymentOptions from './PaymentOptions';
import Visa from './VisaPayment';
import Momo from "./Momo";
import styled from "styled-components";

import { Step2 } from '../processInfo.tsx';

export const DetailsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
margin-bottom: 20px;

@media (min-width: 601px){
display: none;
}
`

export function Details() {
  
  return(
    <DetailsWrapper>
      <Step2 />
     </DetailsWrapper>
  )
}


type PaymentMethod = 'credit-card' | 'mobile-money';

export function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card'); 

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  return (
    <Styles.Container>
      <Styles.Form>
        <PaymentOptions onPaymentMethodChange={handlePaymentMethodChange} />
      </Styles.Form>
      <Styles.OptionsContainer>
        <p>we only accept</p>
        <Styles.Options
          src={paymentMethod === 'credit-card' ? visa : momoLogo}
          alt="momo options"
        />
      </Styles.OptionsContainer>
      <Details />
      <Styles.Form>
        {paymentMethod === 'credit-card' ? <Visa /> : <Momo />}
        <div className="buttonContainer">
          <Button text="Confirm payment" background="#009688" color="white" width={200} weight="bold" onClick={() => {navigate("/buy-pin/successful")}} />
        </div>
      </Styles.Form>
    </Styles.Container>
  );
}
