import styled from "styled-components";

export const CateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 8rem;
  cursor: pointer;
  padding: 2rem 0.5rem;
  background-color: ${({ selected }) =>
    selected ? "var(--blancotransp)" : "var(--azultransp)"};
  border-radius: 15px;
`;

export const CateCardImg = styled.img`
  width: 10rem;
  height: 6rem;
  border-radius: 0.4rem;
`;
export const CateCardTitle = styled.h2``;
