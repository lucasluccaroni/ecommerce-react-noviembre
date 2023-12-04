//CLASE 6 - PROMESAS - MOCK - .MAP() - CARDS

import { useEffect, useState } from "react"
import { getProducts } from "../../ascyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then((response)=>{
            setProducts(response)
        })
    }, [])
    console.log(products);

    // const productsComponents = products.map(product =>{
    //     return(
    //         <div className={estilos.container} key={product.id}>
    //             <h2> {product.name} </h2>
    //             <img src={product.img} style={{width: 150}} />
    //             <h3> {product.price} </h3>
    //         </div>
    //     )
    // })

    return(
        <div>

            <h1>{greeting}</h1>
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer
