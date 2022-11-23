// What we will like to preform.

export const addToCart = (id, title, price, rating, image, quantity) => {
  return {
    type: "Add_Item_To_Cart",
    item: {
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
      quantity: quantity,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: "Remove_Item_From_Cart",
    id: id,
  };
};

export const increaseQuantity = (id, quantity) => {
  return {
    type: "Increase_Quantity",
    id: id,
    quantity: quantity,
  };
};

export const decreaseQuantity = (id, quantity) => {
  return {
    type: "Decrease_Quantity",
    id: id,
    quantity: quantity,
  };
};
