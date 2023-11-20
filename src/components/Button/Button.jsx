const Button = ({color, text, callback}) => {

    //const {callback, color, label} = props

    //console.log(props);
    return <button onClick={callback} style={{color: color}}> {text} </button>
}

export default Button