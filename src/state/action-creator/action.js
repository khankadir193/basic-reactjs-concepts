export const storeData = (item) => {
    return (dispatch) => {
        dispatch({
            type:'add',
            payload:item
        });
    }
}