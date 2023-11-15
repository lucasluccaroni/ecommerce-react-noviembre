import estilos from "./NavBar.module.css"

const NavBar = () =>{
    return (
        <nav className={estilos.container}>
            <h1 className={estilos.rojo}>Ecommerce</h1>
            <section className={estilos.categories}>
                <button>Productos</button>
                <button>Carrito</button>
                <button>Contacto</button>
            </section>
        </nav>
    )
}

export default NavBar
