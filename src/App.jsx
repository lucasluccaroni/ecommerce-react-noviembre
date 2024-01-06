import NavBar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ButtonMultifuncion from './components/ButtonMultifuncion/ButtonMultifuncion'
import Layout from './components/Children/Children'
import Count from './components/Ciclos/Ciclos'
import { useState, createContext } from 'react'
import ContadorDeVueltas from './components/ContadorDeVueltas/ContadorDeVueltas'
import ContadorConBoton from './components/ContadorConBoton/ContadorConBoton'
import EventListener from './components/EventListener/EventListener'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailcontainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EventListenerDos from './components/EventListenerDos/EventListenerDos'




export const Context = createContext()


function App() {
  const [show, setShow] = useState(false)
  const [view, setView] = useState("listado")
  const [cart, setCart] = useState([])   // carrito (CartWidget) - clase 11 context
  

  // //Funcion para agregar al carrito (clase11 - context)
  // const addItem = (productToAdd) =>{
  //   if(!isInCart(productToAdd.id)) {
  //     setCart(prev => [...prev, productToAdd])
  //   }
  // }

  // //Funcion para checkear si lo que agregamos al carrito ya esta ahi y se repite el producto (clase11 - context)
  // const isInCart = (productId) =>{
  //   return cart.some(prod => prod.id === productId)
  // }
 

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={"Valor de prueba"}  >
          <NavBar />
          <div>
            <Link to="/detail" > Detalle</Link>
            <Link to="/"> Listado </Link>
          </div>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={"Curso React Luccaroni"}/>} />
            <Route path='/category/:categoryId' element={ <ItemListContainer greeting={"Filtro categoria"}/>} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer /> } />
            <Route path='*' element={ <h1>404 Not found.</h1> } />
          </Routes>
        </Context.Provider>
        </BrowserRouter>

      {/* <Button text={"Celulares"} color={"red"} callback={() => console.log("click en celular")} />
      <Button text={"Tablets"} color={"blue"} callback = {() => console.log("click en tablets")} />
      <Button text={"Notebooks"} color={"green"} callback={() => console.log("click en notebooks")} /> */}


      {/* <ItemCount initialValue={10} intervalo={10} />
      <ItemCount initialValue={20} intervalo={20} />
      
      <ButtonMultifuncion label={"Actividad1"} backgroundColor={"red"} callback={() => alert("ACTIVIDAD 1")} /> */}


      {/* <Layout title="Titulo del Layout" color="red" >
          <p> Texto children1 </p>
          <p> Texto children1 </p>

      </Layout>

      <Layout title="Titulo del Layout" color="blue" >
          <p> Texto children2 </p>
      </Layout>

      <Layout title="Titulo del Layout" color="pink" >
          <button>Children3</button>
      </Layout> */}

{/*       <button onClick={()=> setShow(show => !show)} >Mostrar/No mostrar </button>
      {show ? <Count/> : <h1>Otro componente</h1>} */}

      {/* <button onClick={()=> setShow(show => !show)} >Mostrar / No mostrar </button>
      {show ? <ContadorDeVueltas/> : <h1>Haga click en "Mostrar" para activar el contador</h1>} */}

{/*       <button onClick={()=> setShow(show => !show)} >Mostrar / No mostrar </button>
      {show ? <ContadorConBoton /> : <h1> Carrito </h1>} */}

      <EventListener />
      <EventListenerDos/>
    </>
  )
}

export default App


//PRUEBA