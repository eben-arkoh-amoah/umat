import React from 'react';
import * as styles from "./styles";
import { MapInputs } from '../../../../utils/functions/map';
import { momo } from '../../../../utils/strings/login/momo';
function Momo() {
  const momoInputs = {
    content: momo
  }

  return (
    <fieldset className="fieldset2">
      <legend>Payment Details</legend>
      <styles.Labelled>
        <div className="inputs">
          {MapInputs(momoInputs)}
        </div>
      </styles.Labelled>
    </fieldset>
  );
}

export default Momo;
