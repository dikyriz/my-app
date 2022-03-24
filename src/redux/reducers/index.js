import {combineReducers} from 'redux';

import counter from './counter';
import counters from './counters';
import {INCREMENT, DECREMENT, INCREMENTS, DECREMENTS, increment, decrement} from "../actions/counter";

// const initProduct = {
//     numberCart:0,
//     Carts:[]
// }

// function todoProduct(state = initProduct, action){
//     switch(action.type){
//         case increment:
//             state.numberCart++
//             state.Carts[action.data].quantity++;
        
//             return{
//             ...state
//         }
//         case decrement:
//             let quantity = state.Carts[action.data].quantity;
//             if(quantity > 1){
//                 state.numberCart--;
//                 state.Carts[action.data].quantity--;
//             }
//         return{
//             ...state
//         }
//         default:
//             return state;

//     }
// }

// const Reducer = (cart = [], action) => {
//     if (action.type === "INCREASE") {
//     let tempcart = cart.map((item) => {
//       if (item.id === action.payload.id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     return tempcart;
//   }
//   if (action.type === "DECREASE") {
//     let tempcart = cart.map((item) => {
//       if (item.id === action.payload.id) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     return tempcart;
//   }
//   return cart;
// };

// // export default Reducer;
// const ShopApp = combineReducers({
//     _todoProduct:todoProduct
// });

// export default ShopApp;

export default combineReducers({ counter, counters });