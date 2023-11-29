import NavBar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ButtonMultifuncion from './components/ButtonMultifuncion/ButtonMultifuncion'
import Layout from './components/Layout/Layout'
import Count from './components/Ciclos/Ciclos'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Curso React Luccaroni"}/>
      <Button text={"Celulares"} color={"red"} callback={() => console.log("click en celular")} />
      <Button text={"Tablets"} color={"blue"} callback = {() => console.log("click en tablets")} />
      <Button text={"Notebooks"} color={"green"} callback={() => console.log("click en notebooks")} />
      {/* <Button label={"Un texto"} /> */}

      <ItemCount initialValue={10} intervalo={10} />
      <ItemCount initialValue={20} intervalo={20} />
      
      <ButtonMultifuncion label={"Actividad1"} backgroundColor={"red"} callback={() => alert("ACTIVIDAD 1")} />


      <Layout title="Titulo del Layout" color="red" >
          <p> Texto children1 </p>
          <p> Texto children1 </p>

      </Layout>

      <Layout title="Titulo del Layout" color="blue" >
          <p> Texto children2 </p>
      </Layout>

      <Layout title="Titulo del Layout" color="pink" >
          <button>Children3</button>
      </Layout>


      <button onClick={()=> setShow(show => !show)} >Mostrar/No mostrar </button>
      {show ? <Count/> : <h1>Otro componente</h1>}
    </>
  )
}

export default App


//PRUEBA