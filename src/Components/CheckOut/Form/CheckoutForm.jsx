import React from "react";
import Submit from "../../Submit/Submit";
import {
  CheckoutDatosStyled,
  CheckoutWrapper2,
  Form,
  Formik,
} from "./CheckOutFormStyles";
import InputForm from "./InputForm";
import {
  checkoutValidationSchema,
  checkoutInitialValues,
} from "../../../Formik";

const CheckoutForm = ({ cartItems }) => {
  return (
    <>
      <CheckoutWrapper2>
        <h2>Completa tus datos:</h2>
        <CheckoutDatosStyled>
          <Formik
            initialValues={checkoutInitialValues}
            validationSchema={checkoutValidationSchema}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <InputForm
                name="name"
                htmlFor="nombre"
                type="text"
                id="nombre"
                placeholder="Nombre"
              >
                Nombre
              </InputForm>
              <InputForm
                name="cellphone"
                htmlFor="telefono"
                type="text"
                id="telefono"
                placeholder="Telefono"
              >
                Telefono
              </InputForm>
              <InputForm
                name="location"
                htmlFor="localidad"
                type="text"
                id="localidad"
                placeholder="Localidad"
              >
                Localidad
              </InputForm>
              <InputForm
                name="address"
                htmlFor="direccion"
                type="text"
                id="dirección"
                placeholder="Dirección"
              >
                Dirección
              </InputForm>
              <Submit disabled={!cartItems.length}>Iniciar compra</Submit>
            </Form>
          </Formik>
        </CheckoutDatosStyled>
      </CheckoutWrapper2>
    </>
  );
};

export default CheckoutForm;
