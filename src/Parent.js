import React from 'react';
import Child from './Child'
import Child2 from './Child2'
const Parent =(props)=>{


    return (


        <Child name={props.name}/>
        <Child2 />
    );
}

export default Parent;