import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  obrigatorio: boolean;
  aoAlterado: (id: string) => void;
  valor: string;
  itens: string[];
}

const ListaSuspensa = ({
  label,
  obrigatorio,
  aoAlterado,
  valor,
  itens,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        value={valor || ""}
      >
        <option value="" disabled>
          Selecione
        </option>
        {itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
