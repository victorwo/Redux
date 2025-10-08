import {createSlice} from '@reduxjs/toolkit';
import products from '../../data/products';
//Slice funciona como um ajudante


const initialState = {
    products: [],
}
//No reducers colocamos as actions.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state, action) =>{
            const idx = state.products.findIndex(p => p.id === action.payload.id);
            if (idx >= 0) {
                // increment existing quantity
                state.products[idx].quantity = (Number(state.products[idx].quantity) || 0) + 1;
            } else {
                // add new product with quantity 1
                state.products.push({...action.payload, quantity: 1});
            }
        }
    }
})
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;