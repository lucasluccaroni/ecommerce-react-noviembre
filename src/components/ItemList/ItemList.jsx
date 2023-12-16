import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return(
        <div  onClick={()=>console.log("list")}  style={{display: "flex", margin: 20}}>
            {
                products.map(product =>{
                    return(
                        <Item key={product.id} {...product} />   //SIEMPRE LA PROP "key" VA DENTRO DEL COMPONENTE DONDE ESTA EL MAP
                    )
                })
            }
    </div>
    )
}

export default ItemList