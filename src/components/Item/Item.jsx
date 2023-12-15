import estilos from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({name, img, price, id}) =>{
    return(
        <div className={estilos.container}>
            <h2> {name} </h2>
            <img src={img} className={estilos.imagen} />
            <h3> {price} </h3>
            <Link to={`/detail/${id}`} >Ver Detalle</Link>
        </div>
    )
}

export default Item