import { Linha } from '../models/Linha';
import { LinhaRepository } from '../repositories/LinhaRepository';
import { LinhaExecutiva } from '../models/LinhaExecutiva';
import { LinhaNormal } from '../models/LinhaNormal';

export class LinhaController {
  constructor(private repo = new LinhaRepository()) {}

  criarLinha(numero: number, capacidade: number, trajeto: string[], tipo: 'normal' | 'executiva', ativa = true) {
    const linhas = this.repo.findAll();
    const nova = tipo === 'executiva'
      ? new LinhaExecutiva(numero, capacidade, trajeto, ativa)
      : new LinhaNormal(numero, capacidade, trajeto, ativa);
    linhas.push(nova);
    this.repo.saveAll(linhas);
  }
  
  listarLinhas(): void {
    const linhas = this.repo.findAll();
    linhas.forEach(l => {
      console.log(l.getDescricao());
    });
  }

  listarLinhasAtivas(ordenarPor: 'numero' | 'capacidade' = 'numero'): Linha[] {
    const linhas = this.repo.findAll();
    return linhas
      .filter(l => l.ativa)
      .sort((a, b) => {
        if (ordenarPor === 'capacidade') return a.capacidade - b.capacidade;
        return a.numero - b.numero;
      });
  }
}
