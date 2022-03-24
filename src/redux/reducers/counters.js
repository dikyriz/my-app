import { INCREMENTS, DECREMENTS } from "../types/counter";


const initialStates = {
    valuee: 0,
};

function reducers(state = initialStates, action) {
    switch (action.type) {
        case INCREMENTS:
            return {valuee: state.valuee + 1};
        case DECREMENTS:
            return {valuee: state.valuee - 1};    
        default:
            return state;
    }
    
};

export default reducers;