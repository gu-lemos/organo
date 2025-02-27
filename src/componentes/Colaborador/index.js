import { IoCloseCircle } from "react-icons/io5";
import './Colaborador.css';

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return(
        <div className='colaborador'>
            <IoCloseCircle size={25} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={ { backgroundColor:corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;