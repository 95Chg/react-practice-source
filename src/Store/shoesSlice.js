import { createSlice } from '@reduxjs/toolkit';

const shoesSlice = createSlice({
    name: 'productInCart',
    initialState: [
        {
            id: 0,
            title: "White and Black",
            content: "Born in France",
            price: 120000
        },

        {
            id: 1,
            title: "Red Knit",
            content: "Born in Seoul",
            price: 110000
        },

        {
            id: 2,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000
        }
    ],
    reducers: {
        updateShoesList(state, action) {
            return state = action.payload;
        }
    }
});
export const { updateShoesList } = shoesSlice.actions;
export default shoesSlice;
