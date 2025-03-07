import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6')}

    return(
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input value={props.time.cor} type='color' className='input-cor' onChange={evento => props.mudarCor(evento.target.value, props.time.id)}></input>
            <h3 style={{borderColor: props.time.cor}}>{props.time.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => {
                    return(
                        <Colaborador 
                            key={index}
                            colaborador={colaborador}
                            corDeFundo={props.time.cor}
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