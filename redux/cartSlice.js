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
            // console.log(state.cart);
        },
        removeItem: (state, action) => {
            // let index = state.cart.findIndex(item => item.name === action.payload)
            // index >= 0 ? state.cart.splice(index, 1) : state.cart
            // console.log(action.payload.name)
            // console.log(state.cart);
            const index = state.cart.findIndex(item => item.id === action.payload)
            console.log(index)
            state.cart.splice(index, 1)
        }
    },
})

export const { addItem, removeItem } = cartReducer.actions

export default cartReducer.reducer