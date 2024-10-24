import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      state.total += action.payload.price
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
      state.total -= action.payload.price
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
  devTools: true
})
