import React, { useContext, useState } from "react";
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

export const defaultFormFields = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const { switchToSignIn } = useContext(AccountContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullName, email, password, confirmPassword } = formFields;
  const [error, setError] = useState(null);
  const [errorText, setErrorText] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      setErrorText("Passwords do not match");
      return;
    }

    const response = await fetch("https://iki-music.onrender.com/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email: email.toLowerCase(),
        password,
      }),
    });
    const data = await response.json();
    const newUserData = data.data;

    if (!newUserData) {
      setError(true);
      setErrorText(data.message);
      return;
    } else {
      setError(false);
      resetFormFields();
      setErrorText(data.message);
      switchToSignIn();
    }
  };

  //Store value to formFields State
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    setError(null);
    setErrorText("");
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit} id="signup-form">
        <Input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
          value={fullName}
          required
        ></Input>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        ></Input>
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        ></Input>
      </FormContainer>
      <Marginer direction={"vertical"} margin={10} />
      {error && <MutedLink style={{ color: "red" }}>{errorText}</MutedLink>}
      {!error && <MutedLink style={{ color: "green" }}>{errorText}</MutedLink>}
      <SubmitButton type="submit" form="signup-form">
        Signup
      </SubmitButton>
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
