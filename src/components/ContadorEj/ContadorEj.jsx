import { useState } from "react"
import styling from "./ContadorEj.module.css"

const ContadorEj = () =>{
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(prev => prev+1 )
    }

    const decrement = () =>{
        setCount(prev => prev-1)
    }

    const reset = () =>{
        setCount(0)
    }

    const total = () =>{
        alert(count)
    }


    return(
        <>
        <div className={styling.container}>
            <h2> {count} </h2>    
            <div className={styling.buttons} >
                <button className={styling.buttonMinus}  onClick={decrement} >-</button>
                <button className={styling.buttonTotal}  onClick={total} >Total</button>
                <button className={styling.buttonPlus}  onClick={increment} >+</button> 
            </div>
            <button className={styling.buttonReset}  onClick={reset} >Reset</button>
        </div>
        </>
    )
}

export default ContadorEj