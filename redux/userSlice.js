import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        aptNum: '',
        orderType: '',
        creditIds: []
    },

}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserProperty: (state, action) => {
            const property = action.payload.name;
            const value = action.payload.value;
            state.info[property] = value
            console.log(state.info)
        },
        addCreditCard: (state, action) => {
            const id = action.payload;
            state.info.creditIds.push(id);
            console.log(state.info.creditIds)
        }
    },
})

export const { updateUserProperty, addCreditCard } = userReducer.actions

export default userReducer.reducer