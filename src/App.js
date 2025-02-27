import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const [times, setTimes] = useState([
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador() {
    console.log('deletando colaborador');
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }

      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map((time, indice) => 
        <Time 
          key={indice} 
          nome={time.nome} 
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;