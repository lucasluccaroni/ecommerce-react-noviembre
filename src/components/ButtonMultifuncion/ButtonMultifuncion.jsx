import estilos from "./ButtonMultifuncion.module.css"

const ButtonMultifuncion = ({color, label, callback}) =>{
    // let styles = {
    //     color: {color},  // ¿Por qué la prop no se aplica dentro de styles? -- CONSULTA CHILDREN ACTIVIDAD 2
    //     border: "solid",
    //     borderColor: "blue"
    // }

    return(
        <>
             <button className={estilos.boton} style={{backgroundColor: color}} onClick={callback}> {label} </button>     {/* style={styles} */}
        </>
    )
}

export default ButtonMultifuncion