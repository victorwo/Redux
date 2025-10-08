import CartActionTypes from "./action-types";


const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_PRODUCT:
            const productIsAlreadyInCart = state.products.some(product => product.id ===action.payload.id);            if(productIsAlreadyInCart) {
                return{
                    ...state,
                    products: state.products.map(product =>
                         product.id === action.payload.id
                          ? {...product, quantity: product.quantity + 1}
                          : product),
                }
            }
            return {
                ...state,
                products:[...state.products, {...action.payload, quantity: 1}],
            }
        case CartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id),
            }

        case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
            return{
                ...state,
                products: state.products.map(product => product.id === action.payload.id
                    ? {...product, quantity: product.quantity+1 } 
                    : product) 
            }
        
        case CartActionTypes.DECREASE_PRODUCT_QUANTITY:

            return {
                ...state,
                products: state.products.map(product => {
                    if (product.id === action.payload.id) {
                        const newQty = (Number(product.quantity) || 0) - 1;
                        return {
                            ...product,
                            quantity: newQty > 0 ? newQty : 1,
                        };
                    }
                    return product;
                })
            };
        
        case CartActionTypes.REMOVE_ALL_PRODUCTS:
            return{
                ...state,
                products: [],
            }
            
        default:
            return state;
    }

}
export default cartReducer;