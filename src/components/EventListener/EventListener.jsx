//- CLASE 10 - EVENTOS

import { useEffect, useRef, useState } from "react"
import estilos from "./EventListener.module.css"


const EventListener = () =>{
    const buttonRef = useRef()
    //const [estilado, setEstilado] = useState(estilos.botonDefault) //! DUDA APUNTES CLASE 10
    const [colorText, setColorText] = useState("red")

    
    useEffect(()=>{
        const button = buttonRef.current

        const handleClick = () =>{
            console.log("hice click")
        }

        const handleScroll = (e) => {
            //console.log(e)
            //console.log("hice scroll")
            //console.log(button.getBoundingClientRect());
            const { y } = button.getBoundingClientRect()
            
            const color = y < 50 ? "black" : "red"
            setColorText(color)
        }


        window.addEventListener("scroll", handleScroll)
        button.addEventListener("click", handleClick)

        return () =>{
            button.removeEventListener("click", handleClick)
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    return (
        <div className={estilos.contenedor} >
            <button onClick={(e) => console.log(e)} ref={buttonRef} style={{color: colorText}} >Haz Click</button>
        </div>
    )
}


export default EventListener