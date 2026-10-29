import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingPlant = state.items.find(
        (item) => item.id === plant.id
      );

      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const target = action.payload;
      const id = typeof target === 'object' ? target.id : target;
      const name = typeof target === 'object' ? target.name : target;

      state.items = state.items.filter(
        (item) => item.id !== id && item.name !== name
      );
    },

    updateQuantity: (state, action) => {
      const { id, name, quantity } = action.payload;
      const plant = state.items.find(
        (item) => item.id === id || item.name === name
      );

      if (plant && Number.isFinite(quantity)) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== plant.id
          );
        } else {
          plant.quantity = quantity;
        }
      }
    },

    addToCart: (state, action) => {
      const plant = action.payload;
      const existingPlant = state.items.find(
        (item) => item.id === plant.id
      );

      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const plant = state.items.find(
        (item) => item.id === action.payload
      );
      if (plant) plant.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const plant = state.items.find(
        (item) => item.id === action.payload
      );
      if (plant && plant.quantity > 1) {
        plant.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;