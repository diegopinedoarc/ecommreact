import { Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/LoginForm/LoginInput";
import {
  Form,
  LoginContainerStyled,
  LoginPasswordStyled,
  LoginButtonGoogleStyled,
  LoginEmailStyled,
} from "./LoginStyle";
import Submit from "../../Components/Submit/Submit";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <LoginContainerStyled>
      <h1>Iniciar sesion</h1>
      <Formik>
        <Form>
          <LoginInput type="text" placeholder="Email" />
          <LoginInput type="password" placeholder="Password" />
          <Link to="/forgot-password">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type="button"
            onClick={(e) => e.preventDefault()}
          >
            <img
              src="https://res.cloudinary.com/dpxe6utid/image/upload/v1669904299/drinksCo/google-icon_jgdcr1_xpdqdb.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit type="button" onClick={(e) => e.preventDefault()}>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
