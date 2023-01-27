import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/interface";

export interface ProductState {
    products: { [id: string]: IProduct }
};

const initialState: ProductState = {
    products: {}
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<IProduct[]>) {
            const products = action.payload;
            products.forEach(product => {
                state.products[product.id] = product;
            })
        }
    },
});

export const { receivedProducts } = productsSlice.actions;
export default productsSlice.reducer;