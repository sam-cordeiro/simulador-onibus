import { LinhaNormal } from '../models/LinhaNormal';
import { LinhaExecutiva } from '../models/LinhaExecutiva';
import { Linha } from '../models/Linha';
import { Database } from '../utils/Database';

export class LinhaRepository {
  private db = new Database<any>('linhas.json');

  findAll(): Linha[] {
    const raw = this.db.read();
    return raw.map((linha: any) => {
      const cls = linha.tipo === 'executiva' ? LinhaExecutiva : LinhaNormal;
      const inst = new cls(linha.numero, linha.capacidade, linha.trajeto, linha.ativa);
      
      inst.passageiros = (linha.passageiros || []).map((p: any) => ({
        id: p.id,
        nome: p.nome
      }));
  
      return inst;
    });
  }
  

  saveAll(linhas: Linha[]): void {
    const raw = linhas.map(l => ({
      tipo: l.getTipo().toLowerCase().includes('executiva') ? 'executiva' : 'normal',
      numero: l.numero,
      capacidade: l.capacidade,
      trajeto: l.trajeto,
      ativa: l.ativa,
      passageiros: l.passageiros.map(p => ({
        id: p.id,
        nome: p.nome
      }))
    }));
    this.db.write(raw);
  }
  
}