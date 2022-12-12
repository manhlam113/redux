const initialValue = {
  products: [],
  carts: [],
  numberCart: 0,
  users: [],
};

const rdcProduct = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "GET_DATA":
      return {
        ...state,
        products: payload,
      };
    case "ADD_CART": {
      let exit = false;
      state.carts.map((item, index) => {
        if (item.productId === payload.productId) {
          state.carts[index].quantity += payload.quantity;
          exit = true;
        }
      });
      if (!exit) {
        return {
          ...state,
          carts: [...state.carts, payload],
        };
      }
    }
    case "INCREMENT_QUANTITY": {
      state.carts.map((item, index) => {
        if (item.productId == payload) {
          state.carts[index].quantity += 1;
        }
      });
      return {
        ...state,
        carts: [...state.carts],
      };
    }
    case "DRECREMENT_QUANTITY": {
      state.carts.map((item, index) => {
        if (item.productId == payload) {
          if (state.carts[index].quantity > 1) state.carts[index].quantity -= 1;
        }
      });
      return {
        ...state,
        carts: [...state.carts],
      };
    }
    case "DELETE_CART":
      return {
        ...state,
        carts: state.carts.filter((item) => {
          return item.productId != payload;
        }),
      };

    // Nếu giỏ hàng chưa có sản phẩm

    default:
      return state;
  }
};
export default rdcProduct;
