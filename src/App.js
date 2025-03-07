import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const colaboradoresInicias = ([
    {
      id: uuidv4(),
      nome: 'Gustavo Lemos',
      cargo: 'Desenvolvedor Full-Stack',
      imagem: 'https://github.com/gu-lemos.png',
      time: 'Front-End',
      favorito: true
    }
  ])

  const [colaboradores, setColaboradores] = useState(colaboradoresInicias);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4();

    setColaboradores([...colaboradores, colaborador]);

    toast.success(`O colaborador ${colaborador.nome} foi cadastrado`);
  }

  function deletarColaborador(id) {
    const colaborador = colaboradores.find(c => c.id === id);
    setColaboradores(colaboradores.filter(c => c.id !== id));
  
    toast.error(`O colaborador ${colaborador?.nome} foi removido`);
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }

      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);

    toast.success(`O time ${novoTime.nome} foi cadastrado`);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
        if (colaborador.id === id) {
            const atualizado = { ...colaborador, favorito: !colaborador.favorito };
            
            toast.success(
                atualizado.favorito 
                    ? `O colaborador ${colaborador.nome} foi adicionado aos favoritos ❤️‍🔥` 
                    : `O colaborador ${colaborador.nome} foi removido dos favoritos 💔`
            );

            return atualizado;
        }
        
        return colaborador;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        {times.map((time, indice) => 
          <Time 
            key={indice} 
            time={time}
            id={time.id}
            nome={time.nome} 
            cor={time.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
            aoFavoritar={resolverFavorito}
          />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;