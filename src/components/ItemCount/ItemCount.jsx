import { useState } from "react"

const ItemCount = ({initialValue, intervalo}) =>{

    const [count, setCount] = useState(initialValue)
    //console.log(count)


    const decrement = () =>{
        if(count > initialValue){
            setCount(prev=> prev - intervalo)
        }
    }

    const increment = () =>{
        setCount(prev=> prev + intervalo)
    }


    return (
        <div>
            <h1> {count} </h1>
            <button onClick={decrement}> Decrementar </button>
            <button onClick={increment}> Incrementar </button>
            <button onClick={()=>setCount(initialValue)}> Reiniciar </button>
        </div>
    )
}

export default ItemCount