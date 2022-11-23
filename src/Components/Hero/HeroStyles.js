import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 80%;
  height: 10rem;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/backgbarrica_nrvrqq.jpg)
    center center;
  background-size: cover;
  border-radius: 0.8rem;
`;
export const HeroFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  width: 16rem;
  height: 2.5rem;
  text-align: center;
`;

export const SearchButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0.4rem;
  padding: 0.5rem 2.3rem;
  color: black;
  width: 18rem;
  height: 2.5rem;
`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
`;
