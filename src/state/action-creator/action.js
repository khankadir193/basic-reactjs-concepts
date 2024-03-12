export const storeData = (item) => {
    return (dispatch) => {
        dispatch({
            type:'add',
            payload:item
        });
    }
}

//increment/decrement
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = ()=>({
    type:INCREMENT
});

export const decrement = ()=>({
    type:DECREMENT
});