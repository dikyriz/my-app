import { INCREMENT, DECREMENT, INCREMENTS, DECREMENTS } from "../types/counter";

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const increments = () => ({
    type: INCREMENTS,
    
});

export const decrements = () => ({
    type: DECREMENTS,
    
});