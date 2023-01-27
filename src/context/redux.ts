import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../counter/cartSlices";
import productReducer from "../counter/productSlice";

export const shoppingCart = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
});

export type RootState = ReturnType<typeof shoppingCart.getState>;

export type AppDispatch = typeof shoppingCart.dispatch;
