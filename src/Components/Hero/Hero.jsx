import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeroFormStyled,
  HeroTitle,
  HeroWrapper,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./HeroStyles";
import * as categoriesActions from "../../redux/categories/categories-actions";

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
      <HeroTitle>¿Que cateogria buscas?</HeroTitle>
      <HeroFormStyled>
        <SearchContainer>
          <SearchInput
            placeholder="Filtra por categoria"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <SearchButton
            onClick={(e) => handlerSubmit(e, value)}
            disabled={!value}
          >
            Buscar
          </SearchButton>
        </SearchContainer>
      </HeroFormStyled>
    </HeroWrapper>
  );
};

export default Hero;
