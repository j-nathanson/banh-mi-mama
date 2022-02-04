import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        aptNum: ''
    }
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
        }
    },
})

export const { updateUserProperty } = userReducer.actions

export default userReducer.reducer