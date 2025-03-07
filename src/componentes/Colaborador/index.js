import { IoCloseCircle } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './Colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
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
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img 
                    src={colaborador.imagem || '../imagens/sem-foto.png'} 
                    alt={colaborador.nome} 
                />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito 
                        ? <FaHeart {...propsFavorito} color="#ff0000"/> 
                        : <FaRegHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;