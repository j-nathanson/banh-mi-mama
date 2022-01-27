import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

// const index = Data.findIndex(item => item.name === 'John');
export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
            console.log(state.cart);
        },
        removeItem: (state, action) => {
            // let index = state.cart.indexOf(action.payload)
            console.log(action.payload.name)
            let index = state.cart.findIndex(item => item.name === action.payload.name)
            console.log(index)
            index >= 0 ? state.cart.splice(index, 1) : state.cart
            console.log(state.cart);
        }
    },
})

export const { addItem, removeItem } = cartReducer.actions

export default cartReducer.reducer