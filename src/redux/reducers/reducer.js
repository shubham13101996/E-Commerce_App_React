import { Action } from "@remix-run/router";

const initialState = {
  carts: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case "REMOVE_CART": {
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };
    }
    default:
      return state;
  }
};
