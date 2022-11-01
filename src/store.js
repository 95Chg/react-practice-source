import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Store/cartSlice';
import shoesSlice from './Store/shoesSlice';
import cardCountSlice from './Store/cardCountSlice';
import viewedShoesSlice from './Store/viewedShoesSlice';


export default configureStore({
    reducer: {
        shoesSlice: shoesSlice.reducer,
        cartSlice: cartSlice.reducer,
        cardCountSlice: cardCountSlice.reducer,
        viewedShoesSlice: viewedShoesSlice.reducer,
    }
})
