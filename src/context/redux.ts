import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlices";

export const shoppingCart = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof shoppingCart.getState>;
export type AppDispatch = typeof shoppingCart.dispatch;
