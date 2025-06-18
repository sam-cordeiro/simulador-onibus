import { PassageiroRepository } from '../repositories/PassageiroRepository';
import { Passageiro } from '../models/Passageiro';
import { LinhaRepository } from '../repositories/LinhaRepository';

export class PassageiroController {
  constructor(
    private repo = new PassageiroRepository(),
    private linhaRepo = new LinhaRepository()
  ) {}

  cadastrar(nome: string, documento: string, numeroLinha: number): void {
    const passageiros = this.repo.findAll();
    const linhas = this.linhaRepo.findAll();
    const linha = linhas.find(l => l.numero === numeroLinha);
    if (!linha) throw new Error("Linha não encontrada")
  
    const novo = new Passageiro(
      (passageiros.length + 1).toString(),
      nome,
      documento,
      linha
    );
    passageiros.push(novo);
    this.repo.saveAll(passageiros);
  
    linha.adicionarPassageiro(novo);
    this.linhaRepo.saveAll(linhas);
  }

  listar(): void {
    const passageiros = this.repo.findAll();
    passageiros.forEach(p => {
      console.log(`ID: ${p.id}, Nome: ${p.nome}`);
    });
  }

  excluirPassageiro(idPassageiro: number): void {
    const passageiros = this.repo.findAll();
  
    // 1. Buscar passageiro
    const passageiroParaExcluir = passageiros.find(p => p.id === idPassageiro.toString());
    if (!passageiroParaExcluir) {
      console.log("Passageiro não encontrado.");
      return;
    }
  
    // 2. Remover do array de passageiros
    const novosPassageiros = passageiros.filter(p => p.id !== idPassageiro.toString());
    this.repo.saveAll(novosPassageiros);
  
    // 3. Remover da linha associada
    const linha = passageiroParaExcluir.linhaCadastrada;
    linha.passageiros = linha.passageiros.filter(p => p.id !== idPassageiro.toString());
  
    // 4. Atualizar apenas a linha modificada no repositório
    const linhas = this.linhaRepo.findAll();
    const indice = linhas.findIndex(l => l.numero === linha.numero);
  
    if (indice !== -1) {
      linhas[indice] = linha;
      this.linhaRepo.saveAll(linhas);
    }
  
    console.log(`Passageiro ${passageiroParaExcluir.nome} removido com sucesso.`);
  }
}
