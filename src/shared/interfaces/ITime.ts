import { IColaborador } from "./IColaborador";

export interface ITime {
    id: string;
    nome: string;
    cor: string;
    colaboradores?: IColaborador[]
}