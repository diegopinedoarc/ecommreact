import React from "react";

import {
  CheckoutDatosStyled,
  CheckoutWrapper2,
  Form,
  Formik,
} from "./CheckOutFormStyles";
import InputForm from "./InputForm";

const CheckoutForm = () => {
  return (
    <CheckoutWrapper2>
      <h2>Completa tus datos:</h2>
      <CheckoutDatosStyled>
        <Formik>
          <Form>
            <InputForm>Nombre</InputForm>
            <InputForm>Email</InputForm>
            <InputForm>Teléfono</InputForm>
            <InputForm>Dirección</InputForm>
            <InputForm>Localidad</InputForm>
          </Form>
        </Formik>
      </CheckoutDatosStyled>
    </CheckoutWrapper2>
  );
};

export default CheckoutForm;
