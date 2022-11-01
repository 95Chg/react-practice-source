import { createSlice } from "@reduxjs/toolkit";

const viewedShoesSlice = createSlice({
    name: 'viewedShoes',
    initialState: [],
    reducers: {
        updateViewedShoes(state, action) {
            const id = action.payload;
            if (state.length === 0) {
                state.push(id);
            } else if (state.length < 3) {
                const dataIndex = state.findIndex((data) => data === id);
                if (dataIndex === -1) {
                    state.push(id);
                } else {
                    state.splice(dataIndex, 1);
                    state.push(id);
                }
            } else {
                const dataIndex = state.findIndex((data) => data === id);
                if (dataIndex === -1) {
                    state.shift();
                    state.push(id);
                } else {
                    state.splice(dataIndex, 1);
                    state.push(id);
                }
            }
        }
    }
})

export const { updateViewedShoes } = viewedShoesSlice.actions;
export default viewedShoesSlice;
