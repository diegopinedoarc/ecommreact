import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ofertasReducer from "./ofertas/ofertas-reducer";
import categoriesReducer from "./categories/categories-reducer";
import productsReducer from "./products/products-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  ofertas: ofertasReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
