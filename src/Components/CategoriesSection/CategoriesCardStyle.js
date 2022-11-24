import styled from "styled-components";

export const CateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: auto;
  cursor: pointer;
  padding: 1rem;
  background-color: ${({ selected }) =>
    selected ? "var(--azultransp)" : "var(--blancotransp)"};
  border-radius: 0.5rem;
`;

export const CateCardImg = styled.img`
  width: 12rem;
  height: 8rem;
  border-radius: 0.8rem;
`;
export const CateCardTitle = styled.h2``;
