let AppReducer = (state, action) => {
  switch (action.type) {
    case "add_products":
      return {
        ...state,
        products: action.products,
        status: action.status,
      };
      break;
    case "login_user":
      return {
        ...state,
        auth: true,
      };
      break;
    case "logout_user":
      return {
        ...state,
        auth: false,
      };
      break;
    case "add_categories":
      return {
        ...state,
        categories: action.categories,
      };
      break;
    default:
      return state;
      break;
  }
};
export default AppReducer;
