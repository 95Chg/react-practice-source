import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'productInCart',
    initialState: [],
    reducers: {
        updateProduct(state, action) {
            const { id, count } = action.payload;
            const existedProductIndex = state.findIndex((product) => {
                return product.id === id;
            });
            if (existedProductIndex === -1) {
                state.push(action.payload);
            } else {
                state[existedProductIndex].count += count;
            }
        },
        deleteProduct(state, action) {
            const productNum = action.payload;
            const existedProductIndex = state.findIndex((product) => {
                return product.id === productNum;
            });
            state.splice(existedProductIndex, 1);
        },
        increaseQuantity(state, action) {
            const productNum = action.payload;
            const existedProductIndex = state.findIndex((product) => {
                return product.id === productNum;
            });
            state[existedProductIndex].count += 1;
        },
        decreaseQuantity(state, action) {
            const productNum = action.payload;
            const existedProductIndex = state.findIndex((product) => {
                return product.id === productNum;
            });
            const quantity = state[existedProductIndex].count;
            if (quantity > 1) {
                state[existedProductIndex].count -= 1;
            }
        },
        updateQuantity(state, action) {
            const [productNum, quantity] = action.payload;
            const existedProductIndex = state.findIndex((product) => {
                return product.id === productNum;
            });
            state[existedProductIndex].count = quantity;
        }
    }
});

export const { updateProduct, deleteProduct, increaseQuantity, decreaseQuantity, updateQuantity } = cartSlice.actions;
export default cartSlice;