import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6')}

    return(
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input value={props.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.id)}></input>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => {
                    return(
                        <Colaborador 
                            key={index}
                            id={colaborador.id}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem || null} 
                            favorito={colaborador.favorito}
                            corDeFundo={props.cor}
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
        : ''
    )
}

export default Time