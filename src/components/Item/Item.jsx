import estilos from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({name, img, price, id}) =>{

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("item")
    }

    return(
        <div className={estilos.container} onClick={handleClick}>
            <h2> {name} </h2>
            <img src={img} className={estilos.imagen} />
            <h3> {price} </h3>
            <Link to={`/detail/${id}`} >Ver Detalle</Link>
        </div>
    )
}

export default Item