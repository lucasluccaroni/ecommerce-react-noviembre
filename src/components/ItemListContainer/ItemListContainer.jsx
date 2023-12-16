//CLASE 6 - PROMESAS - MOCK - .MAP() - CARDS

import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../ascyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)




    useEffect(()=>{
        setLoading(true)
        const ascyncFunction = categoryId ? getProductsByCategory : getProducts

        ascyncFunction(categoryId)
            .then((response)=>{
            setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
        // if(categoryId){
        //     getProductsByCategory(categoryId)
        //     .then((response)=>{
        //         setProducts(response)
        //     })
        //     .catch(error =>{
        //         console.log(error)
        //     })
        //     .finally(()=>{
        //         setLoading(false)
        //     })
        // } else{
        //     getProducts()
        //     .then((response)=>{
        //         setProducts(response)
        //     })
        //     .catch(error =>{
        //         console.log(error)
        //     })
        //     .finally(()=>{
        //         setLoading(false)
        //     })
        // }
    }, [categoryId])


    if(loading){
        return <h1>Cargando...</h1>
    }

    return(
        <div onClick={()=>console.log("container")}>

            <h1>{greeting}</h1>
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer
