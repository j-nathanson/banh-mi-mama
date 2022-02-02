import { createSlice } from '@reduxjs/toolkit'
import { MENU } from '../shared/menuData'

const initialState = {
    menu: MENU
}

export const menuReducer = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
})

export default menuReducer.reducer