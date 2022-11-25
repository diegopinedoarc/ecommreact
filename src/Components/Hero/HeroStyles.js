import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/backgbarrica_nrvrqq.jpg)
    center center;
  background-size: cover;
  border-radius: 0.8rem;
  @media only screen and (max-width: 624px) {
    width: 90%;
    flex-direction: column;
    gap: 0.2rem;
    height: 9rem;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    width: 90%;
    padding: 0.3rem;
  }
`;
export const HeroFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeroTitle = styled.h2`
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    text-align: center;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: black;
  width: 16rem;
  height: 1.5rem;
  text-align: center;
  @media only screen and (max-width: 624px) {
    width: 10rem;
  }
`;

export const SearchButton = styled(motion.button)`
  border-radius: 0.8rem;
  outline: none;
  border: none;
  background-color: rgb(214, 40, 40);
  color: rgb(234, 226, 183);
  font-weight: bold;
  width: 3rem;
  height: 2.5rem;
`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 20px;
  position: relative;
`;
