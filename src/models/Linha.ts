import { Transportavel } from "./Interface";
import { Passageiro } from "./Passageiro";

export abstract class Linha implements Transportavel{
  public passageiros: Passageiro[] = [];

  constructor(
    public numero: number,
    public capacidade: number,
    public trajeto: string[],
    public ativa: boolean = true
  ){}

  abstract getTipo(): string;

  getIdentificador(): number {
    return this.numero
  }

  getDescricao(): string {
    return `${this.getTipo()} - Trajeto: ${this.trajeto.join(' -> ')}`;
  }

  adicionarPassageiro(passageiro: Passageiro): boolean {
    if (this.passageiros.length >= this.capacidade) return false;
    this.passageiros.push(passageiro);
    return true;
  }

  removerPassageiro(id: string): boolean {
  const index = this.passageiros.findIndex(p => p.id === id);
    if (index >= 0) {
      this.passageiros.splice(index, 1);
      return true;
    }
    return false;
  }
}