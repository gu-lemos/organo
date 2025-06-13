import "./campo.css";

interface CampoProps {
  placeholder: string;
  aoAlterado: (valor: string) => void;
  tipo?: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
}

const Campo = ({
  placeholder,
  aoAlterado,
  tipo,
  label,
  valor,
  obrigatorio = false,
}: CampoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${tipo}`}>
      <label>{label}</label>
      <input
        type={tipo ?? "text"}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
