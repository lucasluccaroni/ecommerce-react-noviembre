import { useEffect, useState } from "react"

const ContadorDeVueltas = () =>{
    const [vuelta, setVuelta] = useState(1)
    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [horas, setHoras] = useState(0)



    useEffect(() =>{
        console.log("effect");
        document.title = `Vuelta ${vuelta}`

        return() =>{
            console.log("limpieza")
            document.title = "Vite + React"
        }

    }, [vuelta])

    const finalizarVuelta = ()=>{
        setVuelta(prev => prev + 1)
    }

    const reiniciarContador = () =>{
        setVuelta(0)
    }

    useEffect(()=>{
        setSegundos(0)
        const intervalId = setInterval(()=>{
            setSegundos(prev => prev + 1)
        },1000)

        return() =>{
            clearInterval(intervalId)
        }
    }, [vuelta])
    



    return(
        <>

            <h1>Contador de vueltas</h1>
            <h2>Vuelta actual: {vuelta} </h2>
            <h2>Tiempo: {horas}h:{minutos}m:{segundos}s </h2>
            <button onClick={finalizarVuelta} > Finalizar vuelta </button>
            <button onClick={reiniciarContador}>Reiniciar</button>



        </>
    )
}

export default ContadorDeVueltas