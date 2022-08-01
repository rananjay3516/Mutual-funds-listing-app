import {createSlice} from '@reduxjs/toolkit';

const userData = createSlice({
    name: 'username',
    initialState: {
        username: ''
    },
    reducers: {
        updateUser: (state, action) => {
            state.username = action.payload.username
        }
    }
});

export const updateUser = userData.actions.updateUser;
export default userData.reducer;