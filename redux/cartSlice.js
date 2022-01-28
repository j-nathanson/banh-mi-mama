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
            state.cart.push(action.payload);
            state.totalOrderCost += action.payload.totalCost;
            // console.log(state.cart);
        },
        removeItem: (state, action) => {
            let index = state.cart.findIndex(item => item.name === action.payload.name)
            index >= 0 ? state.cart.splice(index, 1) : state.cart
            console.log(action.payload.name)
            console.log(state.cart);
        }
    },
})

export const { addItem, removeItem } = cartReducer.actions

export default cartReducer.reducer