import { Linha } from "./Linha";

export class Passageiro {
    constructor(
        public id: string,
        public nome: string,
        public documento: string,
        public linhaCadastrada: Linha
    ) {}
}
  