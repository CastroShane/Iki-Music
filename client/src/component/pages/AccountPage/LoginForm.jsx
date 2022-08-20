import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
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

const defaultFormFields = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { switchToSignUp } = useContext(AccountContext);
  const { setCurrentUser, error, setError } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //Redirects to homepage whenever someone signs-in
  const history = useHistory();
  const routeChange = () => {
    let path = `/`;

    history.push(path);
  };

  //Store value to formFields State
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    setError(false);
  };

  //Sends login information to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password,
      }),
    });

    const data = await response.json();
    const userData = data.data;

    if (!userData) {
      setErrorText(data.message);
      setError(true);
      return;
    } else {
      setError(false);
      setCurrentUser(userData);
      resetFormFields();
      routeChange();
    }
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit} id="signin-form">
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
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          required
        ></Input>
      </FormContainer>
      <Marginer direction={"vertical"} margin={10} />
      <MutedLink href="#"> Forget your password?</MutedLink>
      <Marginer direction={"vertical"} margin="1.6em" />
      {error && <MutedLink style={{ color: "red" }}>{errorText}</MutedLink>}

      <SubmitButton type="submit" form="signin-form">
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
