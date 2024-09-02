import React, { useReducer } from 'react'

const reducer=(state, action)=>{
console.log(state,action);

if(action.type==="Inc"){
    return{count: state.count+1}
}

else if(action.type==="Dec"){
    return{count: state.count-1}
}

else{
    return state; // return the same state if action type is not recognized  // to avoid error
}

}

const First = () => {

    // useReducer(reducer,InitialState)

    const [state,dispatch]=useReducer(reducer,{count:0});

    //reducer is a pure function 
    // reducer have 2 arguments 1 state and 2nd is action

    const handleClickInc=()=>{
        dispatch({type:"Inc"});
    }

    const handleClickDec=()=>{
        dispatch({type:"Dec"});
    }


  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <br/>
      <br/>
      <button onClick={handleClickDec}>-</button>
     
     
    </div>
  )
}

export default First
