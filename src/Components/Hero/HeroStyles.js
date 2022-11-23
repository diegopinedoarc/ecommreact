import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 80%;
  height: 20rem;
  display: flex;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
export const HeroTitle = styled.h2``;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: black;
`;

export const SearchButton = styled.button`
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: black;
`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
`;
