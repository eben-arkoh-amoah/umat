import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import * as styles from "./styles"; 
import loginbg from "../../images/loginbg.jpg"; 
import { MobileLogin } from "../mobile/login";

export function Login() {
  const navigation = useNavigate();
  const device = window.innerWidth;
  return (
    <styles.Container>
      <styles.Section1>
        <styles.Hero>
          Welcome to <br />UMat admissions
        </styles.Hero>
        <p>
          Your Journey Begins Here! Secure your admission by purchasing a Personal Identification Number (PIN)
        </p>
        <styles.ButtonContainer>
          <Button
            color="#4D4D4D"
            width={160}
            background="#62F0E4"
            text="Buy Your Pin"
            onClick={() => {
              navigation("/buy-pin");
            }}
          />
        </styles.ButtonContainer>
      </styles.Section1>
      <styles.Line />
      <React.Fragment>
      {
        device > 600 ? <styles.LoginSection>
        <styles.LoginImage src={loginbg} alt="login" />
        <styles.Form>
          <legend>LOGIN</legend>
          <div>
            <label>Reference</label>
            <input type="text" placeholder="12345" />
          </div>
          <div>
            <label>PIN</label>
            <input type="text" placeholder="465656" />
          </div>
        </styles.Form>
          </styles.LoginSection> : <MobileLogin />}
        <Button text="LOGIN" width={250} background="#0A7C72" color="white"  onClick={() => {
              navigation("/student");
            }}/>
        </React.Fragment>
    </styles.Container>
  );
}
