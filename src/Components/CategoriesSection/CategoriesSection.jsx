import React from "react";
import { CateSection } from "./CategoriesSectionStyle";
import { useSelector } from "react-redux";
import CategoriesCard from "./CategoriesCard";
const CategoriesSection = () => {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <CateSection>
      {categories.map((category) => (
        <CategoriesCard key={category.id} {...category} />
      ))}
    </CateSection>
  );
};

export default CategoriesSection;
