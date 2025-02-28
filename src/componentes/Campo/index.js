import './campo.css'

const Campo = (props) => {
    const placeholderModificada = `${props.placeholder}...`;
    
    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${props.tipo}`}>
            <label>{props.label}</label>
            <input 
                type={props.tipo ?? 'text'} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo;