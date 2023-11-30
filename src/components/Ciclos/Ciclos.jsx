//CLASE 5 - COMPONENTES II - Ciclos y useEffect

import { useState, useEffect } from "react"


const Count = ({title = "My App"}) => {
    const [count, setCount] = useState(0)


    useEffect(()=>{
        console.log("effect")
        document.title= `${title} Contador= ${count}`

        return () =>{
            console.log("limpieza")
            document.title = "Vite + React"
        } 
    }, [count, title])

    //console.log("Fuera de useEffect")

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