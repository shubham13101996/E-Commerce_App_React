const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export default ADD;

export const DELETE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};
