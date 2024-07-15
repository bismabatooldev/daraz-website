import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'
const store = configureStore({
    reducer: {
        cartReducer
    }
})

export default store;