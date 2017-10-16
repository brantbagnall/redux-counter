// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

var initialState = {
    currentValue: 0
}

export function increment (amount) {
    return {
        type: INCREMENT,
        amount
    }
}

export function decrement (amount) {
    return {
        type: DECREMENT,
        amount
    }
}

export default function counter (state=initialState, action) {
    switch (action.type) {
        case INCREMENT:
            
            return {currentValue: state.currentValue + action.amount}

    
            case DECREMENT:
            
            return {currentValue: state.currentValue - action.amount}

    
        default:
            return state
    }
}