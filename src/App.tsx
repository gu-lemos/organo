import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Banner from './componentes/Banner'
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { IColaborador } from "./shared/interfaces/IColaborador";
import { ITime } from "./shared/interfaces/ITime";

function App() {
  const [times, setTimes] = useState<ITime[]>([
    {
      id: crypto.randomUUID(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: crypto.randomUUID(),
      nome: 'UX e Design',
      cor: '#D86EBF',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Mobile',
      cor: '#FEBA05',
    },
    {
      id: crypto.randomUUID(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const colaboradoresInicias = ([
    {
      id: crypto.randomUUID(),
      nome: 'Gustavo Lemos',
      cargo: 'Desenvolvedor Full-Stack',
      imagem: 'https://github.com/gu-lemos.png',
      time: 'Front-End',
      data: "2025-06-06",
      favorito: true
    }
  ])

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(colaboradoresInicias);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    colaborador.id = crypto.randomUUID();

    setColaboradores([...colaboradores, colaborador]);

    toast.success(`O colaborador ${colaborador.nome} foi cadastrado`);
  }

  function deletarColaborador(id: string) {
    const colaborador = colaboradores.find(c => c.id === id);
    setColaboradores(colaboradores.filter(c => c.id !== id));
  
    toast.error(`O colaborador ${colaborador?.nome} foi removido`);
  }

  function mudarCorDoTime(cor: string, id: string) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }

      return time;
    }));
  }

  function cadastrarTime(novoTime: ITime) {
    setTimes([...times, { ...novoTime, id: crypto.randomUUID() }]);

    toast.success(`O time ${novoTime.nome} foi cadastrado`);
  }

  function resolverFavorito(id: string) {
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
      <Banner enderecoImagem="/imagens/banner.png" textoAlternativo="O banner principal da página do Organo"/>
      <Formulario 
        cadastrarTime={cadastrarTime}
        nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        {times.map((time) => 
          <Time 
            key={time.id} 
            time={time}
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