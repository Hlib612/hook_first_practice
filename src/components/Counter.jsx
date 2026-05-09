import { useState } from "react";

export default function Counter(){
   const [count , setCount] = useState(0)
    const increaseCounter = () =>{
        setCount(count + 1)
    }
    const decreaseCount = () =>{
        if(count === 0){
            alert('Your counter alredy zero, STOP!')
            return
        }
        setCount(count - 1)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCounter}>Click to increase</button>
        <button onClick={decreaseCount}>Click to decrease</button>
        </>
    )
}