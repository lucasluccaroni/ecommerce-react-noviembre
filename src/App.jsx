import NavBar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ButtonMultifuncion from './components/ButtonMultifuncion/ButtonMultifuncion'

function App() {
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
      
      <ButtonMultifuncion label={"Actividad1"} color={"green"} callback={() => alert("ACTIVIDAD 1")} />

    </>
  )
}

export default App
