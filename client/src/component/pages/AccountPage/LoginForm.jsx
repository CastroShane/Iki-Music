import React, { useContext, useEffect, useState } from "react";
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
import jwt_decode from "jwt-decode";
import FavoritesContext from "../../context/FavoritesContext";

const defaultFormFields = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { switchToSignUp } = useContext(AccountContext);
  const { setCurrentUser, error, setError } = useContext(CurrentUserContext);
  const { favoritesDispatch } = useContext(FavoritesContext);

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
    const userData = await data.data;

    if (!userData) {
      setErrorText(data.message);
      setError(true);
      return;
    } else {
      setError(false);
      setCurrentUser(userData);
      favoritesDispatch({
        type: "change-initial-state",
        data: userData.favorites,
      });
      resetFormFields();
      routeChange();
    }
  };

  useEffect(() => {
    const handleCallbackResponse = async (response) => {
      //Decode the JWT into an object so that we can use the data
      let userObj = jwt_decode(response.credential);

      const { name, picture, email } = userObj;
      const favorites = {
        songs: [],
        albums: [],
        playlists: [],
        artist: [],
      };
      const googleUserData = {
        fullName: name,
        email: email.toLowerCase(),
        picture,
        favorites,
      };
      const res = await fetch("/google-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(googleUserData),
      });

      const userData = await res.json();

      setCurrentUser(userData.data);
      favoritesDispatch({
        type: "change-initial-state",
        data: userData.data.favorites,
      });
    };
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "666226095597-g19014tqtj834o66dtom3ef84rv5jp3b.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
  }, [setCurrentUser]);
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
      <Marginer direction={"vertical"} margin="1.5em" />
      {error && <MutedLink style={{ color: "red" }}>{errorText}</MutedLink>}

      <SubmitButton type="submit" form="signin-form">
        Signin
      </SubmitButton>
      <Marginer direction={"vertical"} margin="0.2em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignUp}>
          Signup
        </BoldLink>
      </MutedLink>
      <Marginer direction={"vertical"} margin="0.2em" />
      <MutedLink>Or</MutedLink>
      <Marginer direction={"vertical"} margin="0.2em" />

      <div id="signInDiv"></div>
    </BoxContainer>
  );
};

export default LoginForm;
