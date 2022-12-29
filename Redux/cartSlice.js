import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  qty: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.qty += 1;
    },
    decrement: (state) => {
      if (state.qty === 1) {
        state.qty === 1;
      } else {
        state.qty -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setQty: (state, action) => {
      state.qty = action.payload;
    },
    SetCart: (state, action) => {
      // const { items, price, quantity } = action.payload;
      // console.log("SLICE", { items, price, quantity });
      // console.log("slicecart");
      state.cartItems = JSON.parse(localStorage.getItem("cart"));
      state.totalPrice = JSON.parse(localStorage.getItem("cartPrice"));
      state.totalQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
      console.log(state.totalPrice);
    },
    AddToCart: (state, action) => {
      const { product, quantity } = action.payload;

      let CheckCartItems;
      CheckCartItems = state.cartItems?.find(
        (item) => item._id === product._id
      );
      console.log(CheckCartItems);
      state.totalPrice = state.totalPrice + product.price * quantity;
      state.totalQuantity = state.totalQuantity + quantity;
      if (CheckCartItems) {
        const updateCartItems = state.cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id)
            return {
              ...cartProduct,
              quantity: quantity,
            };
        });
        state.cartItems = updateCartItems;
      } else {
        product.quantity = quantity;
        state.cartItems = [...state.cartItems, { ...product }];
      }
      console.log("added to cart ran");
      console.log(product.name);
      console.log(state.cartItems);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      localStorage.setItem("cartPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("cartQuantity", JSON.stringify(state.totalQuantity));
      toast.success(`${product.name}, Added to cart!`, {
        progress: undefined,
        theme: "colored",
      });
    },
    Remove: (state, action) => {
      console.log(current(state));
      const product = action.payload;
      console.log(product.name);
      let foundProduct;
      foundProduct = current(state.cartItems).find(
        (item) => item._id === product._id
      );
      const newCartItems = state.cartItems.filter(
        (item) => item._id !== product._id
      );
      state.cartItems = newCartItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      localStorage.setItem("cartPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("cartQuantity", JSON.stringify(state.totalQuantity));
    },
    TogglecartQty: (state, action) => {
      const { _id: id, value } = action.payload;
      console.log(id, value);
      let foundProduct;
      let index;
      foundProduct = current(state.cartItems).find((item) => item._id === id);
      index = state.cartItems.findIndex((product) => product._id === id);
      if (value === "inc") {
        const newCartItems = state.cartItems.map((item) =>
          item._id === id
            ? { ...item, quantity: foundProduct.quantity + 1 }
            : item
        );
        state.cartItems = [...newCartItems];
        state.totalPrice = state.totalPrice + foundProduct.price;
        state.totalQuantity = state.totalQuantity + 1;
      } else if (value === "dec") {
        const newCartItems = state.cartItems.map((item) =>
          item._id === id
            ? { ...item, quantity: foundProduct.quantity - 1 }
            : item
        );
        state.cartItems = [...newCartItems];
        state.totalPrice = state.totalPrice - foundProduct.price;
        state.totalQuantity = state.totalQuantity - 1;
      }
    },
  },
});

export const {
  increment,
  decrement,
  SetCart,
  AddToCart,
  Remove,
  TogglecartQty,
  setQty,
} = cartSlice.actions;

export default cartSlice.reducer;
