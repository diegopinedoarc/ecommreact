import { Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/LoginForm/LoginInput";
import { Form, LoginContainerStyled } from "./LoginStyle";

const Login = () => {
  return (
    <LoginContainerStyled>
      <h1>Iniciar sesion</h1>
      <Formik>
        <Form>
          <LoginInput type="text" placeholder="Email" />
          <LoginInput type="password" placeholder="Password" />
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
