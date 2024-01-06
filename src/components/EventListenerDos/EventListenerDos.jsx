import { useEffect, useRef, useState } from "react"

const EventListenerDos = () =>{
    const [colorText, setColorText] = useState("red")

    const buttonRef = useRef()
    
    useEffect(()=>{
        //console.log(buttonRef)
        //console.log(buttonRef.current)
        
        //-DEFINO LAS FUNCIONES PARA USARLAS EN LOS ADD Y REMOVE EVENTLISTENER
        //const handleClick = () => console.log("hice click");
        const handleScroll = () =>{
            const button = buttonRef.current
            //console.log(button.getBoundingClientRect());

            const {y} = button.getBoundingClientRect()

            const color = y < 150 ? "black" : "red"
            setColorText(color)
        }



        //-AGARRO EL BOTON DEL DOM Y LE AGREGO EL ADDEVENTLISTENER
        window.addEventListener("scroll", handleScroll)



        //-FUNCION DE LIMPIEZA
        return () =>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return <button ref={buttonRef} style={{color: colorText, marginBottom: 1000}} > 05/01/24 </button>
}

export default EventListenerDos