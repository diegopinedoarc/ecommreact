import styled from "styled-components";
export const SliderContainer = styled.div`
  max-width: 50vw;
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 1rem;
`;
export const ImgSlider = styled.img`
  display: block;
  overflow: hidden;
  height: 200px;
  max-width: 50%;
  width: 100%;
  border-radius: 0.8rem;
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
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
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
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
