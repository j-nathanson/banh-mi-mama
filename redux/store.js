import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import cartReducer from './cartSlice'
import sandwichReducer from './sandwichSlice'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        menuReducer,
        cartReducer,
        sandwichReducer,
        userReducer
    },
})