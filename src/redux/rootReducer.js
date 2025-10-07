import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

// expose reducers under the keys expected by selectors in the app
const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

export default rootReducer;