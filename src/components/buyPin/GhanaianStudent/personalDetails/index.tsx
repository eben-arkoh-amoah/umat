import React from 'react';
import * as Styles from "./styles";
import SelectNationality from '../../../Selectnationality';
import { MobilePersonalInfo } from '../../../mobile/personalDetails';

export function ProvidePersonalDetails() {
  const device = window.innerWidth;

  return (
    <React.Fragment>
      {
        device <  600  ? <MobilePersonalInfo/> : <Styles.Form>
      <SelectNationality />
      <fieldset className="fieldset2">
        <Styles.InputConatainer>
          <label>Full Name</label>
          <input type="text" placeholder="Thomas Darkoh" />
        </Styles.InputConatainer>
        <Styles.InputConatainer>
          <label>Email</label>
          <input type="text" placeholder="thomasila@example.com" />
        </Styles.InputConatainer>
        <Styles.InputConatainer>
          <label>Phone</label>
          <input type="text" placeholder="054467345" />
          <select>
            <option>choose an option</option>
            <option>choose an option</option>
            <option>choose an option</option>
          </select>
        </Styles.InputConatainer>
      </fieldset>
        </Styles.Form>
      }
    </React.Fragment>
  );
}
