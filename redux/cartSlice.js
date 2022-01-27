import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
            console.log(state.cart);
        },
    },
})

export const { addItem } = cartReducer.actions

export default cartReducer.reducer