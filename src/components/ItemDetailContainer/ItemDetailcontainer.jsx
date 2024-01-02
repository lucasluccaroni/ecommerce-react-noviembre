import { useState, useEffect, useContext } from "react"
import { getProductsById } from "../../ascyncMock"
import { useParams } from "react-router-dom"
import { Context } from "../../App" 

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState()

    const value = useContext(Context)
    console.log(value);


    const {productId} = useParams()
    //console.log(productId);

    useEffect(() =>{
        getProductsById(productId)
            .then(response =>{
                setProduct(response)
            })
    }, [productId])


    return(
        <div>
            <h1>Detalle de productos</h1>
            <h2> {product?.name} </h2>
        </div>
    )
}

export default ItemDetailContainer