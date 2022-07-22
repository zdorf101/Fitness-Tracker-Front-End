import React, { useState } from "react";
import {
  LoginWrapper,
  FormWrapper,
  LoginHeader,
  Station,
  LoginContent,
  Intro,
  FormInputs,
  GroupWrapper,
  InputTag,
  Error,
  Button,
} from "./LoginElements";
//import logo from "../../images/5954bb45deaf2c03413be353.png";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

function Login({ authenticate }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const navigate = useNavigate();
  const alert = useAlert();

  const hadleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    await fetch("https://fitnesstrac-kr.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          window.localStorage.setItem("token", result.token);
          window.localStorage.setItem("username", result.user.username);
          authenticate();
          navigate("/login");
          alert.show(result?.message, {
            type: "success",
          });
        } else {
          alert.show(result?.message, {
            type: "error",
          });
        }
      })
      .catch((error) => setValidationError(true));
  };
  return (
    <LoginWrapper>
      <FormWrapper>
        <LoginHeader>
          <Station>FitnessTrac.kr</Station>
        </LoginHeader>
        <LoginContent>
          <Intro>Sign in to your account</Intro>
          {error ? <Error>Username/Password required</Error> : ""}
          {validationError && <Error>Username/Password is incorrect</Error>}
          <FormInputs>
            <GroupWrapper>
              <InputTag
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                  setValidationError(false);
                  setError(false);
                }}
                value={username}
                placeholder="Username"
                type="text"
              />
            </GroupWrapper>
            <GroupWrapper>
              <InputTag
                onChange={(e) => {
                  setError(false);
                  setValidationError(false);
                  setPassword(e.target.value);
                }}
                value={password}
                required
                placeholder="Password"
                type={"password"}
              />
            </GroupWrapper>
            <GroupWrapper>
              <Button
                type="submit"
                onClick={hadleLogin}
                backgroundColor="#7986cb"
                color={"#fff"}
                marginTop="20px"
                background={"#7986cb"}
              >
                Login
              </Button>
            </GroupWrapper>
          </FormInputs>
          <div>
            Signup <a href="/signup">here</a>
          </div>
        </LoginContent>
      </FormWrapper>
    </LoginWrapper>
  );
}

export default Login;
