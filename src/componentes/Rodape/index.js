import './Rodape.css';

const Rodape = () => {
    return(
        <footer className='rodape-pagina'>
            <div className='redes-sociais'>
                <img src='../imagens/fb.png' alt='facebook'></img>
                <img src='../imagens/tw.png' alt='twitter'></img>
                <img src='../imagens/ig.png' alt='instagram'></img>
            </div>

            <div className='logo'>
                <img src='../imagens/logo.png' alt='logotipo'></img>
            </div>

            <div className='desenvolvedor'>
                <p>Desenvolvido por Gustavo Lemos.</p>
            </div>
        </footer>
    )
}

export default Rodape;