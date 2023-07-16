import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart : [],
  };
  
  const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
     addItem (state, action) {
       state.cart.push(action.payload);
     },

     deleteItem(state, action) {
        state.cart = state.cart.filter(
            (item) => item.pizzaId !== action.payload
        )
      },

      increaseQuantity(state, action) {
     const item = state.cart.find(
        (item) => item.pizzaId === action.payload
     )
        item.quantity ++;
        item.totalPrice = item.quantity * item.unitPrice;
      },
      
      decreaseQuantity(state, action) {
        const item = state.cart.find(
           (item) => item.pizzaId === action.payload
        )
           item.quantity --;
           item.totalPrice = item.quantity * item.unitPrice;

           if(item.quantity === 0 ) cartSlice.caseReducers.deleteItem(state,action)
         },

      clearCart(state, action) {
        state.cart = [];
      },
     
    
    
    }
  
  })

  export const cardTotalPrice = (state) => state.cart.cart.reduce((prev , curr) => prev + curr.totalPrice ,0) 
  export const cardTotalQuantity = (state) => state.cart.cart.reduce((prev , curr) => prev + curr.quantity ,0) 

  export const getCurrentQuantity = id => state=>state.cart.cart.find(
    item => item.pizzaId === id) ?.quantity ?? 0;
  
  
  export const  {addItem , increaseQuantity , decreaseQuantity , clearCart , deleteItem } = cartSlice.actions;
  export default cartSlice.reducer;
  