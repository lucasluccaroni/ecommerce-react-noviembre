import estilos from "./ButtonMultifuncion.module.css"

const ButtonMultifuncion = ({backgroundColor, label, callback}) =>{
    let styles = {
        backgroundColor,  //prop dentro de styles
        border: "solid",
        borderColor: "blue"
    }

    return(
        <>
             <button style={styles} /* className={estilos.boton} */   /* style={{backgroundColor}} */ onClick={callback}> {label} </button>     
        </>
    )
}

export default ButtonMultifuncion