import React, { useContext } from "react";
import { AccountContext } from "./AccountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import Marginer from "./Margin";

const SignUpForm = () => {
  const { switchToSignIn } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Nmae"></Input>
        <Input type="email" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Input type="password" placeholder="Confirm Passowrd"></Input>
      </FormContainer>
      <Marginer direction={"vertical"} margin={10} />

      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction={"vertical"} margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignIn}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default SignUpForm;
