import { IoCloseCircle } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './Colaborador.css';

const Colaborador = ({ id, nome, imagem, cargo, corDeFundo, favorito, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return(
        <div className='colaborador'>
            <IoCloseCircle 
                size={25} 
                className='deletar'
                onClick={() => aoDeletar(id)} 
            />
            <div className='cabecalho' style={ { backgroundColor:corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito 
                        ? <FaHeart {...propsFavorito} color="#ff0000"/> 
                        : <FaRegHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;