const initialState = {
    count:0
}
const reducer = (state = initialState,action)=>{
    if(action.type === 'increment'){
        return state;
    }
    return {
        name:"Abdul Kadir Khan",
        address:"Gorakhpur,Uttarpradesh"
    }
};

export default reducer;
