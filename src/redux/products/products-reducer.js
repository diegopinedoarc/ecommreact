import { stockProducts } from "../../data/products";

const INITIAL_STATE = {
  products: stockProducts,
  totalProducts: totalProducts,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productsReducer;
