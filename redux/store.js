import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import cartReducer from './cartSlice'
import sandwichReducer from './sandwichSlice'
import userReducer from './userSlice'
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        menuReducer,
        cartReducer,
        sandwichReducer,
        userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

})