import { PassageiroRepository } from '../repositories/PassageiroRepository';
import { Passageiro } from '../models/Passageiro';

export class PassageiroController {
  constructor(private repo = new PassageiroRepository()) {}

  cadastrar(nome: string, documento: string): void {
    const passageiros = this.repo.findAll();
    const novo = new Passageiro(Date.now().toString(), nome, documento);
    passageiros.push(novo);
    this.repo.saveAll(passageiros);
  }

  listar(): void {
    const passageiros = this.repo.findAll();
    passageiros.forEach(p => {
      console.log(`ID: ${p.id}, Nome: ${p.nome}`);
    });
  }
}
