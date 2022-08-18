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

const LoginForm = () => {
  const { switchToSignUp } = useContext(AccountContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Imworking");
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" required></Input>
        <Input type="password" placeholder="Password" required></Input>
      </FormContainer>
      <Marginer direction={"vertical"} margin={10} />
      <MutedLink href="#"> Forget your password?</MutedLink>
      <Marginer direction={"vertical"} margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Signin
      </SubmitButton>
      <Marginer direction={"vertical"} margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignUp}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default LoginForm;
