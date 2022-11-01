import { createSlice } from "@reduxjs/toolkit";

const cardCountSlice = createSlice({
    name: 'cardCount',
    initialState: 1,
    reducers: {
        addCardCount(state) {
            return state += 1;
        }
    }
})

export const { addCardCount } = cardCountSlice.actions;
export default cardCountSlice;
