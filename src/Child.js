import React , { useContext }  from 'react';
import CounterContext from './CounterCiontext';
//import Button from '@material-ui/core/Button';

const Child  =(props)=>{
    let counterValue = useContext(CounterContext)

 console.log(counterValue)
    return (
        <div>

        <h2> This is first child</h2>
        <h3>this is  {props.name} </h3>
        <h3> counter : {counterValue}</h3> 
        <button onClick={()=>{
            counterValue[1](++counterValue[0])
        }}>click me</button>
        
        </div>


    );
}
export default Child;