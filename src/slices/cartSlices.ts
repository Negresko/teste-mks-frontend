import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../context/redux';

import { IProduct } from '../interfaces/interface';

const initialState: IProduct[] = [

];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IProduct>) {
            const product = action.payload;
            if (state) {
                const productIndex = state.findIndex(product => product.id === action.payload.id);                
                if (productIndex === -1){
                    state.push(product);
                } else {
                    if (state[productIndex].id === product.id) {
                        state[productIndex].quantity += 1;
                    }
                }
            } else {
                console.error(product);
            }
        },

        incrementToCart(state, action: PayloadAction<string>) {
            const productIncremented = state.findIndex(product => product.id === Number(action.payload));
            state[productIncremented].quantity++;

        },

        decrementToCart(state, action: PayloadAction<string>) {
            const productDecremented = state.findIndex(product => product.id === Number(action.payload));
            state[productDecremented].quantity--;
            if(state[productDecremented].quantity === productDecremented) {
                console.log('teste');
            }
        },

        removeToCart(state, action: PayloadAction<string>) {
            return state.filter(product => product.id !== Number(action.payload));
            
        },
    },
})

export const { addToCart, removeToCart, incrementToCart, decrementToCart } = cartSlice.actions;
export default cartSlice.reducer

export const countCart = (state: RootState) => state.cart.reduce((count, value) => count += (value.quantity), 0);
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next) => acc += (next.quantity * Number(next.price)), 0);