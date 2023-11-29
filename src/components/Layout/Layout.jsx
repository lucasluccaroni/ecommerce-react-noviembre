//CLASE 5 - COMPONENTES II

const Layout = (props) =>{
    console.log(props)

    return(
        <div>
            <h1 style={{color: props.color}}> {props.title} </h1>
            {props.children}
        </div>
    )
}

export default Layout