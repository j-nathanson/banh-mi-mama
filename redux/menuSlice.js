import { createSlice } from '@reduxjs/toolkit'
import MENU_ITEMS from '../shared/menuData'

const initialState = {
    menuItems: MENU_ITEMS
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
})

// export const { increment, decrement, incrementByAmount } = menuSlice.actions

export default menuSlice.reducer