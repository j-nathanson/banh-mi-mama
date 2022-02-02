import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customizations: {
        cilantro: true,
        pickledVeg: true,
        pate: true,
        mayonnaise: true,
        soySauce: false,
        chili: false
    }
}

export const sandwichReducer = createSlice({
    name: 'customSandwich',
    initialState,
    reducers: {
        updateProperty: (state, action) => {
            const property = action.payload.name;
            const value = action.payload.value;
            state.customizations[property] = value
        },
        resetCustomizations: (state) => {
            state.customizations = initialState.customizations
        }

    },
})

export const { updateProperty, resetCustomizations } = sandwichReducer.actions

export default sandwichReducer.reducer