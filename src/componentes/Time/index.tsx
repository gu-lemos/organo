import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { ITime } from "../../shared/interfaces/ITime";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import Colaborador from "../Colaborador";


interface TimeProps {
  time: ITime;
  colaboradores: IColaborador[];
  mudarCor: (cor: string, id: string) => void;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Time = ({ time, colaboradores, mudarCor, aoDeletar, aoFavoritar }: TimeProps) => {
  console.log({time});
  console.log({colaboradores});
  const css = { backgroundColor: hexToRgba(time.cor, "0.6") };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <input
        value={time.cor}
        type="color"
        className="input-cor"
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
      ></input>
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
