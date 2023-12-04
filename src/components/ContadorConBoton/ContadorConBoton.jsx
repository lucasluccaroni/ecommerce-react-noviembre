import { useEffect, useState } from "react"


const ContadorConBoton = () =>{
    const [numero, setNumero] = useState(0)
    
    
    const increment = () =>{
        setNumero(prev => prev + 1)
    }
    
    const decrement = () =>{
        if(numero > 0){
            setNumero(prev => prev - 1)
        }
    }
    
    const reset = () => {
        console.log("Bienvenidos")
        setNumero(0)
    }
    
    useEffect(()=>{
        document.title= `Carrito: ${numero}`
        console.log("effect")


        return()=>{
            console.log("limpieza")
            document.title= "Vite + React"
        }
    }, [numero])
    
    return(
        <div>
            <div>
                <button onClick={decrement} > - </button>
                <h2> {numero} </h2>
                <button onClick={increment} > + </button>
            </div>
            <button onClick={ ()=>console.log(`Agregado al carrito: ${numero}.`) } >Agregar al carrito</button>
            <button onClick={reset} >Vaciar carrito</button>
        </div>
    )
}


export default ContadorConBoton