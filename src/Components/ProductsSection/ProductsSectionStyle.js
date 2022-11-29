import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
  }
`;
export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  align-items: center;
  width: 100%;
`;

export const ButtonPag = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 0.4rem 0.4rem 0 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-align: center;
  cursor: pointer;

  background: var(--rojo);
  color: var(--blanco);
  border: none;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    /* background-color: black; */
    box-shadow: 2px 4px 8px 2px var(--azul);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
`;
