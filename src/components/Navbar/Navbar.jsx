import estilos from "./NavBar.module.css"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return (
        <nav className={estilos.container}>
            <h1 className={estilos.rojo}>Ecommerce</h1>
            <section className={estilos.categories}>
                <Link to="/category/celular" className={estilos.link} > Celulares</Link>
                <Link to="/category/tablet" className={estilos.link}> Tablets</Link>
                <Link to="/category/notebook" className={estilos.link}> Notebooks</Link>
            </section>
        </nav>
    )
}

export default NavBar
