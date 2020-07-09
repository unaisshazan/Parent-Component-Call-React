import React from 'react';
import CounterReducer from './CounterReducer'

const Child2 = () => {

 let  [state, dispatch] = useReducer(CounterReducer,10);
 console.log(state)


    return(

        <div> </div>

    )
}
export default Child2;