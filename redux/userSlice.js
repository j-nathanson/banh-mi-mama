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
        addUser: (state, action) => {
            const newInfo = action.payload
            newInfo.orderType = state.info.orderType
            newInfo.creditIds = state.info.creditIds
            state.info = newInfo
        },
        updateUserProperty: (state, action) => {
            const property = action.payload.name;
            const value = action.payload.value;
            state.info[property] = value;
        },
        addCreditCard: (state, action) => {
            const id = action.payload;
            state.info.creditIds.push(id);
        }
    },
})

export const { addUser, updateUserProperty, addCreditCard } = userReducer.actions

export default userReducer.reducer