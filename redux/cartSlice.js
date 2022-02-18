import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    totalOrderCost: 0
}

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload
            item.id = state.cart.length
            state.cart.push(item);
            state.totalOrderCost += item.totalCost;
        },
        removeItem: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            const totalCost = action.payload.totalCost
            state.cart.splice(index, 1)
            state.totalOrderCost -= totalCost;
        }
    },
})

export const { addItem, removeItem } = cartReducer.actions

export default cartReducer.reducer