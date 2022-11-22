import { TOGGLE_MENU_HIDDEN } from "./user-actions";

const INITIAL_STATE = {
  hiddenMenu: true,
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU_HIDDEN:
      return;
  }
};
