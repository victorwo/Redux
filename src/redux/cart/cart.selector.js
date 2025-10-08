import rootReducer from "../rootReducer";
export const selectProductsCount = (state) => {
    const products = state?.cart?.products ?? [];
    return products.reduce((acc, curr) => acc + (Number(curr.quantity) || 0), 0);
};

export const selectProductsTotalPrice = (state) => {
    return state.cart.products.reduce(
        (acc,curr) => acc + curr.price * curr.quantity, 0)
}