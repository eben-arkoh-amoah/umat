import React from 'react';
import * as Styles from './styles';
import visalogo from '../../../../images/visalogo.png';
import { MapInputs } from '../../../../utils/functions/map';
import { fieldset1 } from '../../../../utils/strings/login/creditCard';

function Visa() {
  const details = {
     content: fieldset1
   }

  return (
    <fieldset className="fieldset2 space">
      <legend>Payment Details</legend>
      <Styles.VisaLogo src={visalogo} alt="" />
      <div className="inputs">
        {MapInputs(details)}
       </div>
      <Styles.VisaInputs>
        <input type="text" placeholder="12" className="inp1" />
        <input type="text" placeholder="23" className="inp2" />
        <input type="text" placeholder="CVC" className="inp3" />
      </Styles.VisaInputs>
    </fieldset>
  );
}

export default Visa;
