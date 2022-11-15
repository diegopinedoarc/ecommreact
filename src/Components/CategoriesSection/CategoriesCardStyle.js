import styled from "styled-components";

export const CateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: solid 1px white;
  align-items: center;
  justify-content: center;
  width: 12rem;
  cursor: pointer;
  padding: 2rem 0.5rem;
  background-color: ${({ selected }) => (selected ? "white" : "black")};
  border-radius: 15px;
`;

export const CateCardImg = styled.img`
  width: 8rem;
  height: 4rem;
`;
export const CateCardTitle = styled.h2``;
