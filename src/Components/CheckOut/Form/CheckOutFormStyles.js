import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";
export const CheckoutDatosStyled = styled.div`
  width: 80%;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Form = styled(FormikForm)`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const CheckoutWrapper2 = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  width: 80%;
`;
