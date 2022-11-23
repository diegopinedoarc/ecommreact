import React from "react";
import {
  CateCardContainer,
  CateCardImg,
  CateCardTitle,
} from "./CategoriesCardStyle";
import * as categoriesActions from "../../redux/categories/categories-actions";
import { useDispatch, useSelector } from "react-redux";

export const CategoriesCard = ({ title, img, category }) => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const dispatch = useDispatch();
  return (
    <CateCardContainer
      selected={category === selectedCategory}
      onClick={() => dispatch(categoriesActions.selectCategory(category))}
    >
      <CateCardImg src={img} alt={category} />
      <CateCardTitle> {title} </CateCardTitle>
    </CateCardContainer>
  );
};

export default CategoriesCard;
