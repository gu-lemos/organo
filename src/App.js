import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
    },
    {
      id: uuidv4(),
      nome: 'Monique Zanini',
      cargo: 'Vendas',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQETzop-d6ItVg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706041210533?e=1746057600&v=beta&t=ZpVn9A9eELqeOp_jg3fgkupRwUh1Gi4R5iDxyirH3YU',
      time: 'Inovação e Gestão',
      favorito: true
    }
  ])


  const [colaboradores, setColaboradores] = useState(colaboradoresInicias);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4();

    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
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
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador;
    }))
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
            id={time.id}
            nome={time.nome} 
            cor={time.cor}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
            aoFavoritar={resolverFavorito}
          />
      )}
    </div>
  );
}

export default App;