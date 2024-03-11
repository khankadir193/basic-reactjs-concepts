const reducer = (state = [],action)=>{
    if(action.type === 'add'){
        console.log('data has been added...???');
    }
    return {
        name:"Abdul Kadir Khan",
        address:"Gorakhpur,Uttarpradesh"
    }
};

export default reducer;
