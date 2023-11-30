import { useState } from "react"

const ContadorDeVueltas = () =>{
    const [vuelta, setVueltas] = useState(1)

    const finalizarVuelta = () =>{
        setVueltas(prev => prev+1)
    }


    return(
        <>
            <h1>Contador de vueltas</h1>
            <h2>Vuelta actual: {vuelta}</h2>
            <button onClick={finalizarVuelta}>Finalizar vuelta</button>
        </>
    )
}

export default ContadorDeVueltas    


// Me quede en 1:45ommit