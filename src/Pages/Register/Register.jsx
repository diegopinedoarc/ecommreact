import { Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/LoginForm/LoginInput";
import {
  Form,
  LoginContainerStyled,
  LoginButtonGoogleStyled,
} from "./RegisterStyle";

const Register = () => {
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik>
        <Form>
          <LoginInput type="text" placeholder="Nombre" />
          <LoginInput type="text" placeholder="Email" />
          <LoginInput type="password" placeholder="Password" />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type="button"
            onClick={(e) => e.preventDefault()}
          >
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
