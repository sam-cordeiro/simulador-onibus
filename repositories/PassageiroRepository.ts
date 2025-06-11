import { Passageiro } from '../models/Passageiro';
import { Database } from '../utils/Database';

export class PassageiroRepository {
  private db = new Database<Passageiro>('passageiros.json');

  findAll(): Passageiro[] {
    return this.db.read();
  }

  saveAll(passageiros: Passageiro[]): void {
    this.db.write(passageiros);
  }
}