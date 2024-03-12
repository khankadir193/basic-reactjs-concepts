import { INCREMENT, DECREMENT } from "../action-creator/action";

const initialState = {
    count: 0
}
export const reducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return state;
    }
    return {
        name: "Abdul Kadir Khan",
        address: "Gorakhpur,Uttarpradesh"
    }
};

//counterReducer function
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}