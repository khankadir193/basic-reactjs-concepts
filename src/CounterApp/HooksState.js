import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../state/action-creator/action';

const HooksState = () => {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        console.log('dispatch...',dispatch);
        dispatch(increment);
    }

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default HooksState