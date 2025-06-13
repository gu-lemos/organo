import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  nomeDosTimes: string[];
  cadastrarTime: (time: ITime) => void;
}

const Formulario = ({
  aoColaboradorCadastrado,
  nomeDosTimes,
  cadastrarTime,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#FFFFFF");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    aoColaboradorCadastrado({
      id: crypto.randomUUID(),
      nome,
      cargo,
      imagem,
      favorito: false,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio
          label="Time"
          itens={nomeDosTimes}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ id: crypto.randomUUID(), nome: nomeTime, cor: corTime });
          setNomeTime("");
          setCorTime("#FFFFFF");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          tipo="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
