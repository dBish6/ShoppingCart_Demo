const initialState = {
  cart: {},
};

export const getTotal = (cart) => {
  return (
    // If there is a product it will add the it's amount, otherwise it will show 0.
    Object.values(cart).reduce(
      (amount, item) => parseInt(item.price) * item.quantity + amount,
      0
    )
  );
};

export const getCartLength = (cart) => {
  // console.log(cart);
  let finalQuantity = 0;

  for (let itemQuantity of Object.values(cart)) {
    finalQuantity += itemQuantity.quantity;
  }

  return finalQuantity;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Item_To_Cart": {
      let newCart = { ...state.cart };
      if (action.item.id in newCart) {
        let newProduct = { ...newCart[action.item.id] };
        newProduct.quantity++;
        newCart[action.item.id] = newProduct;
      } else {
        newCart[action.item.id] = action.item;
        newCart[action.item.id].quantity = 1;
      }
      return {
        ...state,
        cart: newCart, // New Item
      };
    }
    case "Remove_Item_From_Cart": {
      let newCart = { ...state.cart };
      if (action.id in newCart) {
        if (newCart[action.id].quantity > 1) {
          let newProduct = { ...newCart[action.id] };
          newProduct.quantity -= 1;
          newCart[action.id] = newProduct;
        } else {
          delete newCart[action.id];
        }
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case "Increase_Quantity": {
      let currentCart = { ...state.cart };

      if (action.id in currentCart) {
        let newProduct = { ...currentCart[action.id] };
        newProduct.quantity += 1;
        currentCart[action.id] = newProduct;
      }
      return {
        ...state,
        cart: currentCart,
      };
    }
    case "Decrease_Quantity": {
      let currentCart = { ...state.cart };
      if (action.id in currentCart) {
        if (currentCart[action.id].quantity > 1) {
          let newProduct = { ...currentCart[action.id] };
          newProduct.quantity--;
          currentCart[action.id] = newProduct;
        } else {
          delete currentCart[action.id];
        }
      }
      return {
        ...state,
        cart: currentCart,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
