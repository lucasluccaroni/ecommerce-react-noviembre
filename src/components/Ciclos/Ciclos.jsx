//CLASE 5 - COMPONENTES II - Ciclos

import { useState } from "react"


const Count = () => {
    const [count, setCount] = useState(0)

    const handleClick = () =>{
        setCount(prev => prev + 1)
    }


    return(
        <>
            <h1> {count} </h1>
            <button onClick={handleClick}> Contador </button>
        </>
    )
}

export default Count