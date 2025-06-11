import { LinhaRepository } from '../repositories/LinhaRepository';
import { LinhaExecutiva } from '../models/LinhaExecutiva';
import { LinhaNormal } from '../models/LinhaNormal';

export class LinhaController {
  constructor(private repo = new LinhaRepository()) {}

  criarLinha(numero: number, capacidade: number, trajeto: string[], tipo: 'normal' | 'executiva') {
    const linhas = this.repo.findAll();
    const nova = tipo === 'executiva'
      ? new LinhaExecutiva(numero, capacidade, trajeto)
      : new LinhaNormal(numero, capacidade, trajeto);
    linhas.push(nova);
    this.repo.saveAll(linhas);
  }

  listarLinhas(): void {
    const linhas = this.repo.findAll();
    linhas.forEach(l => {
      console.log(l.getDescricao());
    });
  }
}
