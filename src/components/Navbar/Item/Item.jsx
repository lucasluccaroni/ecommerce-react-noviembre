import estilos from "./Item.module.css"

const Item = ({name, img, price}) =>{
    return(
        <div className={estilos.container}>
            <h2> {name} </h2>
            <img src={img} className={estilos.imagen} />
            <h3> {price} </h3>
        </div>
    )
}

export default Item