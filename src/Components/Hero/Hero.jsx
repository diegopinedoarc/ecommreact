import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeroFlexBox,
  HeroFormStyled,
  HeroTitle,
  HeroWrapper,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./HeroStyles";
import * as categoriesActions from "../../redux/categories/categories-actions";
import { GoSearch } from "react-icons/go";
import Slider from "../Slider/Slider";

const Hero = ({ doScroll }) => {
  const [value, setValue] = useState("");
  const categoriesList = useSelector(
    (state) => state.categories.categories
  ).map((category) => category.category);
  const dispatch = useDispatch();
  const handlerSubmit = (e, value) => {
    e.preventDefault();
    const newCategory = value.trim().toLowerCase().split(" ").join("");
    const selectedCategory = categoriesList.find(
      (category) => category.toLowerCase() === newCategory
    );

    if (selectedCategory) {
      dispatch(categoriesActions.selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert("No encontrada");
    }
    setValue("");
  };
  return (
    <HeroWrapper>
      <Slider />
      <HeroFlexBox>
        <HeroTitle style={{ fontFamily: "var(--fontgrande)" }}>
          ¿Que estas buscando hoy?
        </HeroTitle>
        <HeroFormStyled>
          <SearchContainer>
            <SearchInput
              placeholder="Ej: Whiskeys, Aperitivos, Licores, Gin"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
            />
            <SearchButton
              onClick={(e) => handlerSubmit(e, value)}
              disabled={!value}
              whileTap={{ scale: 0.92 }}
            >
              <GoSearch />
            </SearchButton>
          </SearchContainer>
        </HeroFormStyled>
      </HeroFlexBox>
    </HeroWrapper>
  );
};

export default Hero;
