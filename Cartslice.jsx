import { createSlice } from "@reduxjs/toolkit";
  const initialState = {
    carts:[100] }
const Cartslice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{
            let findindex =state.carts.findindex((item)=> item.id=== action.payload.id);
           if(findindex>=0){
               state.carts[findindex].qty+=1;
           }else{
             state.carts= [...state.carts,action.payload]
           } } }})
export default  Cartslice.reducer;

export const {addCart} = Cartslice.actions;