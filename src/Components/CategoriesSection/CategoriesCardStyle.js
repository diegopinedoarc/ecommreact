import styled from "styled-components";

export const CateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 5rem;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 2px 4px 8px 2px var(--blanco);
  background-color: ${({ selected }) =>
    selected ? "var(--naranjatransp)" : "none"};
  border-radius: 1rem 1rem 0rem 1rem;
  color: ${({ selected }) => (selected ? "rgb(0, 48, 73)" : "black")};
  &:hover {
    /* background-color: black; */
    box-shadow: 2px 4px 8px 2px var(--naranja);
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const CateCardImg = styled.img`
  width: 9rem;
  height: 6rem;
  border-radius: 0.8rem;
  position: relative;
  top: -1.5rem;
  box-shadow: 2px 4px 8px 2px var(--blanco);
`;
export const CateCardTitle = styled.h2`
  font-size: 1rem;
  position: relative;
  top: 3rem;
  background-color: var(--blancotransp2);
  width: 6rem;
  text-align: center;
  border-radius: 0.4rem;
  z-index: 45;
`;
