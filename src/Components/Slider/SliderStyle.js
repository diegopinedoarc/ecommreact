import styled from "styled-components";
export const SliderContainer = styled.div`
  max-width: 50vw;
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 624px) {
    width: 20rem;
    max-width: 100vw;
  }
`;
export const ImgSlider = styled.img`
  display: block;
  overflow: hidden;
  height: 220px;
  max-width: 90%;
  width: 70%;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 1px var(--naranja);
  opacity: 70%;
  &:hover {
    /* background-color: black; */
    box-shadow: 2px 2px 2px 1px var(--azul);
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
  }
`;
export const ButtonSliderPlus = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--blanco);
  background-color: var(--rojo);
  box-shadow: 2px 2px 2px 1px var(--naranja);
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    /* background-color: black; */
    box-shadow: 2px 2px 2px 1px var(--azul);
  }
`;
export const ButtonSliderLess = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--blanco);
  background-color: var(--rojo);
  box-shadow: 2px 2px 2px 1px var(--naranja);
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    /* background-color: black; */
    box-shadow: 2px 2px 2px 1px var(--azul);
  }
`;
