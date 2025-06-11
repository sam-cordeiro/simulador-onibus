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
      const inst = new cls(linha.numero, linha.capacidade, linha.trajeto);
      inst.passageiros = linha.passageiros || [];
      return inst;
    });
  }

  saveAll(linhas: Linha[]): void {
    const raw = linhas.map(l => ({
      tipo: l.getTipo().toLowerCase().includes('executiva') ? 'executiva' : 'normal',
      numero: l.numero,
      capacidade: l.capacidade,
      trajeto: l.trajeto,
      passageiros: l.passageiros
    }));
    this.db.write(raw);
  }
}