import { Categories } from "../../data/categories";

const INITIAL_STATE = {
  categories: Categories,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
